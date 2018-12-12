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
    return view('twitter');
});

//Auth routes
Auth::routes();

//routes controllers
\App\Http\Controllers\MonederoController::routes();
\App\Http\Controllers\HerramientasController::routes();
\App\Http\Controllers\CartasController::routes();
