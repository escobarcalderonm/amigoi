<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Carta extends Model
{
    use SoftDeletes;
    protected $table = 'cartas';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'tipo',
        'calidad',
        'media',
        'codigo'
    ];
}
