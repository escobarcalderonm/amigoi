<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Participante;

class HomeController extends Controller
{
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
        $participantes = Participante::where('id_participante',null)->get();
        return view('amigoi',compact('participantes'));
    }
}
