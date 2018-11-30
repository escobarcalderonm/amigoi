<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Monedero extends Model
{
    use SoftDeletes;
    protected $table = 'monedero';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cantidad',
        'id_extra',
        'id_transaccion'
    ];

    public static function getMonedas()
    {
        $monedero = Monedero::orderby('id', 'desc')->first();
        if ($monedero != null) {
            return $monedero->cantidad;
        }else{
            return null;
        }
    }
}
