<?php
 $fichero = $_FILES;
 define("SALT","<br>");
 echo SALT.SALT.SALT;
 if(move_uploaded_file($fichero["mficheros"]["tmp_name"],"./".$fichero["mficheros"]["name"])){
           echo "fichero ".$fichero["mficheros"]["name"] ." subido correctamente ".SALT;
 } else {
           echo "hay error ".count($fichero). SALT; 
 }
?>

