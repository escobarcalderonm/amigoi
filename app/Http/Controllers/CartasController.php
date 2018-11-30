<?php

namespace App\Http\Controllers;

use App\Carta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class CartasController extends Controller
{
    static function routes()
    {
        Route::prefix('cartas')->group(function () {
            Route::get('store-player', 'CartasController@storePlayer')->name('cartas.store-player');
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

    public function storePlayer(Request $request)
    {
        try{
            $nombre = $request->nombre;
            $tipo = $request->tipo;
            $calidad = $request->calidad;
            $media = $request->media;
            $codigo = $request->codigo;

            $player = Carta::where('codigo',$codigo)->first();

            if($player == null){
                $carta = new Carta();
                $carta->nombre = $nombre;
                $carta->tipo = $tipo;
                $carta->calidad = $calidad;
                $carta->media = $media;
                $carta->codigo = $codigo;
                $carta->save();
                return [$carta->id,'save'];
            }else{
                return [$player->id,'none'];
            }
        }catch (\Exception $ex){
            return [0,'error'];
        }
    }
}
