<?php

namespace App\Http\Controllers;

use App\Stat;
use Illuminate\Http\Request;
use App\Participante;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use LaravelFCM\Facades\FCM;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use LaravelFCM\Message\Topics;
use Weidner\Goutte\GoutteFacade;

class HomeController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('CheckRole:monedero');
    }

    public function index()
    {
//        ewuxPYvjdH8:APA91bHYeMBxaqOO6TkiWozmpqjpiujTLym5wtk74l-5il-d-IwNInOHt13PWCyEQSYJUmDA9m_OtmJf_rgx9uqs6VvR-7RUYhEgh4HpIGZH6K0kmVb5u3DMfhPeGdZHBYyZ0qf_g0qV
//        self::updateYT();
    }

    public static function updateForo()
    {
        $crawler = GoutteFacade::request('GET', 'https://www.3djuegos.com/foro-de/123160/0/red-dead-online');
        $collection = $crawler->filter('.mar_b3');

        $collection->each(function ($node) {
            $last = '';
            foreach (file('last.txt') as $line) {
                $last = $line;
            }
            $text = $node->text();
            $title = explode(": ", $text)[1];
            if ($title != $last) {
                HomeController::sendNotify('Nuevo tema:', $title);
                File::put('last.txt', $title);
            }
        });
    }

    public static function sendNotify($title, $msn)
    {
        $optionBuilder = new OptionsBuilder();
        $optionBuilder->setTimeToLive(60 * 20);

        $notificationBuilder = new PayloadNotificationBuilder($title);
        $notificationBuilder->setBody($msn)
            ->setSound('default');

        $dataBuilder = new PayloadDataBuilder();
        $dataBuilder->addData(['a_data' => 'my_data']);

        $option = $optionBuilder->build();
        $notification = $notificationBuilder->build();
        $data = $dataBuilder->build();

        $token = env("token_device");

        $downstreamResponse = FCM::sendTo($token, $option, $notification, $data);

        $downstreamResponse->numberSuccess();
        $downstreamResponse->numberFailure();
        $downstreamResponse->numberModification();

//return Array - you must remove all this tokens in your database
        $downstreamResponse->tokensToDelete();

//return Array (key : oldToken, value : new token - you must change the token in your database )
        $downstreamResponse->tokensToModify();

//return Array - you should try to resend the message to the tokens in the array
        $downstreamResponse->tokensToRetry();

// return Array (key:token, value:errror) - in production you should remove from your database the tokens
    }

    public static function updateYT()
    {
        $crawler = GoutteFacade::request('GET', 'https://www.youtube.com/channel/UClXrFSl_okwrFBAhzJK1zKQ/about');
        $collection = $crawler->filter('.about-stat');

        $penStat = Stat::orderby('id', 'desc')->first();

        $stat = new Stat();
        $stat->suscriptores = 0;
        $stat->views = 0;
        $stat->save();

        $diffViews = 999;
        $diffSubs = 49;

        $collection->each(function ($node) {
            $stat = Stat::orderby('id', 'desc')->first();
            $text = $node->text();
            echo $text;
            if (strpos($text, 'subscribers') !== false) {
                $str = str_replace(' subscribers', '', $text);
                $str = str_replace(',', '', $str);
                $stat->suscriptores = intval($str);
                echo 'SUBS: ' . $str;
            }
            if (strpos($text, 'views') !== false) {
                $str = str_replace(' • ', '', $text);
                $str = str_replace(' views', '', $str);
                $str = str_replace(',', '', $str);
                $stat->views = intval($str);
                echo 'VIEWS: ' . $str;
            }

            $stat->update();
        });

        $stat = Stat::orderby('id', 'desc')->first();
        $lastnotify = Stat::orderby('id', 'desc')->where('notify', 1)->first();

        if ($penStat->suscriptores + $diffSubs < $stat->suscriptores) {
            self::sendNotify("NUEVOS SUBS", $stat->suscriptores . " subs");
        }

        if ($lastnotify == null) {
            $stat->notify = 1;
            $stat->update();
            self::sendNotify("Youtube", $stat->suscriptores . " subs y " . $stat->views . ' views');
        } elseif ($lastnotify->views + $diffViews < $stat->views) {
            $stat->notify = 1;
            $stat->update();
            self::sendNotify("NUEVOS VIEWS", $stat->views . ' views');
        }
    }
}

