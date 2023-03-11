<?php
 $datos= $_POST["ntexto"];
 $fichero = $_FILES;
 define("SALT","<br>");
 if(move_uploaded_file($fichero["mficheros"]["tmp_name"],"./".$fichero["mficheros"]["name"])){
         echo "Se ha subido el fichero y se ha leído el texto " . $datos . SALT;
 } else {
           echo "hay error ".count($fichero).SALT; 
 }
?>

