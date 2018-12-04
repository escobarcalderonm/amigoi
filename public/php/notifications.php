<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = '';
    foreach ($_POST as $key => $value) {
        $data .= "Field [".htmlspecialchars($key)."] is [".htmlspecialchars($value)."]\n";
    }
    $fichero = 'file.txt';
// Abre el fichero para obtener el contenido existente
    $actual = file_get_contents($fichero);
// Añade una nueva persona al fichero
    $actual .= date('l jS \of F Y h:i:s A')."\n";
    $actual .= $data."\n";
// Escribe el contenido al fichero
    file_put_contents($fichero, $actual);
    echo 'Todo recibido';
}else{
    $data = '';
    foreach ($_GET as $key => $value) {
        $data .= "Field [".htmlspecialchars($key)."] is [".htmlspecialchars($value)."]\n";
    }
    $fichero = 'file.txt';
// Abre el fichero para obtener el contenido existente
    $actual = file_get_contents($fichero);
// Añade una nueva persona al fichero
    $actual .= date('l jS \of F Y h:i:s A')."\n";
    $actual .= $data."\n";
// Escribe el contenido al fichero
    file_put_contents($fichero, $actual);
    echo 'No es post';
}


?>