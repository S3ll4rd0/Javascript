<?php
//URL del artículo: http://www.ejemplode.com/21-xml/525-ejemplo_de_menu_de_comidas_en_xml.html
//Fuente: ejemplos de Menú de comidas en XML
// <?xml version="1.0" encoding="UTF-8" \?\>
   $pp=<<<XML
   <menu_almuerzo>
    <comida>
        <nombre>Waffles</nombre>
        <precio>$2.00</precio>
        <descripcion>Waffles baratos de McDonalds</descripcion>
        <calorias>650</calorias>
    </comida>
    <comida>
        <nombre>Hamburguesa</nombre>
        <precio>$5.00</precio>
        <descripcion>La hamburguesa mas comun de McDonalds</descripcion>
        <calorias>1500</calorias>
    </comida>    
</menu_almuerzo>
XML;
header("Content-Type: text/xml");
echo $pp;

?>

