<?php

use Illuminate\Database\Seeder;

class ParticipantesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\Participante();
        $user->nombre = 'Maikel';
        $user->foto = 'amigoi/img/projects/maik.png';
        $user->save();
        $user = new \App\Participante();
        $user->nombre = 'Benji';
        $user->foto = 'amigoi/img/projects/benji.png';
        $user->save();
        $user = new \App\Participante();
        $user->nombre = 'Mamá';
        $user->foto = 'amigoi/img/projects/mama.png';
        $user->save();
        $user = new \App\Participante();
        $user->nombre = 'Carmen';
        $user->foto = 'amigoi/img/projects/carmen.png';
        $user->save();
        $user = new \App\Participante();
        $user->nombre = 'Manuel';
        $user->foto = 'amigoi/img/projects/manuel.png';
        $user->save();
        $user = new \App\Participante();
        $user->nombre = 'Henri';
        $user->foto = 'amigoi/img/projects/henri.png';
        $user->save();
    }
}
