<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaccion extends Model
{
    use SoftDeletes;
    protected $table = 'transacciones';
    public static $TAX = 5;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'compra',
        'venta',
        'repeticion',
        'id_carta'
    ];

    public function getCarta(){
        return Carta::find($this->id_carta);
    }

    public function getProfit(){
        return (Transaccion::getWithoutTax($this->venta) - $this->compra) * $this->repeticion;
    }

    public static function getWithoutTax($price){
        return intval($price * (1 - Transaccion::$TAX/100));
    }

    public static function getProfitByDay($day){
        $transacciones = Transaccion::where('created_at','like',$day->format('Y-m-d').'%')->get();
        $profit = 0;
        foreach ($transacciones as $transaccion) {
            $profit += $transaccion->getProfit();
        }
        return intval($profit);
    }

    public static function getAllProfit(){
        $transacciones = Transaccion::all();
        $profit = 0;
        foreach ($transacciones as $transaccion) {
            $profit += $transaccion->getProfit();
        }
        return intval($profit);
    }

    public static function getCountDays(){
        $tr1 = Transaccion::orderby('created_at','asc')->first();
        $day1 = Carbon::createFromFormat('Y-m-d H:i:s',$tr1->created_at);
        $tr2 = Transaccion::orderby('created_at','desc')->first();
        $day2 = Carbon::createFromFormat('Y-m-d H:i:s',$tr2->created_at);

        $cdays = $day1->diffInDays($day2);
        return $cdays;
    }

    public static function getProfitPerDay(){
        return intval(Transaccion::getAllProfit()/Transaccion::getCountDays());
    }
}
