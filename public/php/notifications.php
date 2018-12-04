<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = '';
    foreach ($_POST as $key => $value) {
        $data .= "Field [".htmlspecialchars($key)."] is [".htmlspecialchars($value)."]\n";
    }
    $myfile = fopen("newfile".uniqid().".txt", "w") or die("Unable to open file!");
    $txt = "Comienzo de la peticion\n";
    fwrite($myfile, $txt);
    $txt = $data;
    fwrite($myfile, $txt);
    fclose($myfile);
    echo 'Todo recibido';
}else{
    echo 'No es post';
}


?>