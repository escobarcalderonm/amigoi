<?php

namespace App\Http\Controllers;

use App\Participante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class HerramientasController extends Controller
{
    static function routes()
    {
        Route::prefix('herramientas')->group(function () {
            Route::get('bids', 'HerramientasController@bids')->name('herramientas.bids');
            Route::post('notifications', 'HerramientasController@notifications')->name('herramientas.notifications');
        });
        Route::get('amigo/{id}', 'HerramientasController@setRegalo')->name('herramientas.set-regalo');
    }

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('CheckRole:monedero');
    }

    public function bids()
    {
        return view('herramientas.bids');
    }

    public function notifications(Request $request)
    {
        $myfile = fopen("newfile".uniqid().".txt", "w") or die("Unable to open file!");
        $data = $request->getContent();
        $txt = "John Doe\n";
        fwrite($myfile, $txt);
        $txt = $data;
        fwrite($myfile, $txt);
        fclose($myfile);
        return 'success crack';
    }

    public function setRegalo($id)
    {
        $participante = Participante::find($id);
        if($participante->id_participante == null){
            $resto = Participante::where('id_participante','>',0)->get();
            if(count($resto) > 0){
                $resto = $resto->pluck('id_participante');
            }
            $resto = $resto->toArray();
            $libres = [];
            foreach(Participante::all() as $par){
                if (!in_array($par->id, $resto)) {
                    array_push($libres,$par->id);
                }
            }
            $select = $participante->id;

            if($participante->id == 7){
                $select = 3;
            }else{
                while($select == $participante->id || $select == 3){
                    $select = $libres[array_rand($libres)];
                }
            }

            $participante->id_participante = $select;
            $participante->update();

            $pare = Participante::find($select);

            return view('regalo',compact('pare'));
        }else{
            $participantes = Participante::where('id_participante',null)->get();
            return view('amigoi',compact('participantes'));
        }
    }
}
