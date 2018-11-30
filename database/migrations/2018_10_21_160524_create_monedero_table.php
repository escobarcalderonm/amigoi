<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMonederoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cartas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->integer('tipo');
            $table->integer('calidad');
            $table->integer('media');
            $table->integer('codigo');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('transacciones', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('compra');
            $table->integer('venta');
            $table->integer('repeticion')->default(1);
            $table->integer('id_carta')->unsigned()->nullable();
            $table->foreign('id_carta')->references('id')->on('cartas')->onUpdate('restrict')->onDelete('restrict');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('monedero', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('cantidad');
            $table->integer('id_transaccion')->unsigned()->nullable();
            $table->foreign('id_transaccion')->references('id')->on('transacciones')->onUpdate('restrict')->onDelete('restrict');
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
        Schema::dropIfExists('monedero');
    }
}
