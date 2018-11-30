<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class HerramientasController extends Controller
{
    static function routes()
    {
        Route::prefix('herramientas')->group(function () {
            Route::get('bids', 'HerramientasController@bids')->name('herramientas.bids');
        });
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
}
