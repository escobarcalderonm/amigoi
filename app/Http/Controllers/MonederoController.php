<?php

namespace App\Http\Controllers;

use App\Carta;
use App\Extra;
use App\Monedero;
use App\Transaccion;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

class MonederoController extends Controller
{
    static function routes()
    {
        Route::prefix('monedero')->group(function () {
            Route::get('/', 'MonederoController@index')->name('monedero.index');
            Route::get('add', 'MonederoController@add')->name('monedero.add');
            Route::get('transacciones', 'MonederoController@transacciones')->name('monedero.transacciones');
            Route::get('extras', 'MonederoController@extras')->name('monedero.extras');
            Route::get('store-transaccion', 'MonederoController@storeTransaccion')->name('monedero.store-transaccion');
            Route::get('update-transaccion', 'MonederoController@updateTransaccion')->name('monedero.update-transaccion');
            Route::get('store-extra', 'MonederoController@storeExtra')->name('monedero.store-extra');
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

    public function index()
    {
        $monedero = Monedero::getMonedas();
        return view('monedero.index', compact('monedero'));
    }

    public function add()
    {
        $transacciones = Transaccion::where('transacciones.created_at','like',Carbon::today()->format('Y-m-d').'%')
            ->join('cartas', 'cartas.id', '=', 'transacciones.id_carta')
            ->orderby('cartas.calidad','desc')
            ->orderby('cartas.media','desc')
            ->orderby('cartas.nombre','asc')
            ->select('transacciones.*','cartas.*','transacciones.id as id_tr','transacciones.created_at as date')
            ->get();
        return view('monedero.add', compact('transacciones'));
    }

    public function transacciones()
    {
        $transacciones = Transaccion::all();
        return view('monedero.transacciones', compact('transacciones'));
    }

    public function extras()
    {
        $extras = Extra::all();
        return view('monedero.extras', compact('extras'));
    }

    public function storeTransaccion(Request $request)
    {
        try {
            $id = $request->id;
            $buy = $request->buy;
            $sell = $request->sell;
            $rep = $request->rep;

            DB::beginTransaction();
            $carta = Carta::find($id);
            if ($carta != null) {
                $transaccion = new Transaccion();
                $transaccion->id_carta = $id;
                $transaccion->compra = $buy;
                $transaccion->venta = $sell;
                $transaccion->repeticion = $rep;
                $transaccion->save();

                if ($transaccion->venta > 0) {
                    $monedero = new Monedero();
                    $monedero->id_transaccion = $transaccion->id;

                    $monedas = Monedero::getMonedas();
                    $profit = $transaccion->getProfit();

                    $monedero->cantidad = $monedas + $profit;
                    $monedero->save();
                }
            } else {
                throw new \Exception('no existe la carta');
            }

            DB::commit();
            return 'success';
        } catch (\Exception $ex) {
            DB::rollBack();
            return $ex->getMessage();
        }
    }

    public function updateTransaccion(Request $request)
    {
        try {
            $id = $request->id;
            $sell = $request->sell;

            DB::beginTransaction();
            $transaccion = Transaccion::find($id);
            $transaccion->venta = $sell;
            $transaccion->update();

            $monedero = new Monedero();
            $monedero->id_transaccion = $transaccion->id;

            $monedas = Monedero::getMonedas();
            $profit = $transaccion->getProfit();

            $monedero->cantidad = $monedas + $profit;
            $monedero->save();

            DB::commit();
            return 'success';
        } catch (\Exception $ex) {
            DB::rollBack();
            return $ex->getMessage();
        }
    }

    public function storeExtra(Request $request)
    {
        try {
            $nombre = $request->nombre;
            $cantidad = $request->cantidad;

            DB::beginTransaction();
            $extra = new Extra();
            $extra->nombre = $nombre;
            $extra->cantidad = $cantidad;
            $extra->save();

            $monedero = new Monedero();
            $monedero->id_extra = $extra->id;

            $monedas = Monedero::getMonedas();
            $profit = $extra->cantidad;

            $monedero->cantidad = $monedas + $profit;
            $monedero->save();

            DB::commit();
            return 'success';
        } catch (\Exception $ex) {
            DB::rollBack();
            return 'error';
        }
    }
}
