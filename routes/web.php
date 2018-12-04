<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//home routes
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/', function () {
    return redirect(url('home'));
});
Route::get('prueba', function () {

// specify which hub you want to use. In this case we'll use the demo hub on app engine.
    $hub_url = "http://maikzen.com/prueba";

// create a new pubsubhubbub publisher
    $p = new \pubsubhubbub\publisher\Publisher($hub_url);

// specify the feed that has been updated
    $topic_url = "https://www.youtube.com/xml/feeds/videos.xml?channel_id=UClXrFSl_okwrFBAhzJK1zKQ";

// notify the hub that the specified topic_url (ATOM feed) has been updated
// alternatively, publish_update() also accepts an array of topic urls
    if ($p->publish_update($topic_url)) {
        echo "$topic_url was successfully published to $hub_url";
    } else {
        echo "Ooops...";
        print_r($p->last_response());
    }
});

//Auth routes
Auth::routes();

//routes controllers
\App\Http\Controllers\MonederoController::routes();
\App\Http\Controllers\HerramientasController::routes();
\App\Http\Controllers\CartasController::routes();
