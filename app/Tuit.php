<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tuit extends Model
{
    use SoftDeletes;
    protected $table = 'tuits';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_tuitero',
        'id_tuit'
    ];
}
