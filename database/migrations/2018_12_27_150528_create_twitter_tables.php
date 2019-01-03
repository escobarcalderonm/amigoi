<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTwitterTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tuiteros', function (Blueprint $table) {
            $table->increments('id');
            $table->string('id_tuiter');
            $table->string('username');
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::create('tuits', function (Blueprint $table) {
            $table->increments('id');
            $table->string('id_tuitero')->unsigned()->nullable();
            $table->foreign('id_tuitero')->references('id')->on('tuiteros')->onUpdate('restrict')->onDelete('restrict');
            $table->integer('id_tuit');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tuiteros');
    }
}
