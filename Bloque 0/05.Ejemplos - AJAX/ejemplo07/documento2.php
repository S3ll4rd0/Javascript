<?php

 $fichero = $_FILES;
 define("SALT","<br>");
 echo SALT.SALT.SALT;
 for($a=0;$a<count($fichero["mficheros"]["name"]);$a++){
     if(move_uploaded_file($fichero["mficheros"]["tmp_name"][$a],"./".$fichero["mficheros"]["name"][$a])){
               echo "fichero ".$fichero["mficheros"]["name"][$a] ." subido correctamente".SALT;
     } else {
               echo "hay error ".count($fichero).SALT; 
     }
 }
 
?>

