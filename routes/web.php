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
    return redirect('/home');
});
Route::get('stats', function () {
    $var = \App\Stat::orderby('id','desc')->limit(24)->get();
    return $var->toJson();
});
Route::get('notify', function () {
    \App\Http\Controllers\HomeController::sendNotify("Titulo",'mensaje');
});

//Auth routes
Auth::routes();

//routes controllers
\App\Http\Controllers\MonederoController::routes();
\App\Http\Controllers\HerramientasController::routes();
\App\Http\Controllers\CartasController::routes();
