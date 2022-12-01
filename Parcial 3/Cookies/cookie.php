<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
    if(isset($_COOKIE['id'])){
        printf("Su ultima visita fue el %s",$_COOKIE['ultimaVisita']);
        $fechaHoy = date("Y/m/d H:i:s");
        setcookie("ultimaVisita",$fechaHoy,time()+7*60*24*365);
    }else{
        printf("No se ha encontrado ninguna cookie");
        $fechaHoy = date("Y/m/d H:i:s");
        $siguienteSemana = time()+7*60*24*365;
        $fechaExpira = date("Y/m/d H:i:s",$siguienteSemana).'<br>';
        echo '<b>Fecha de Creacion de la cookie </b>'.$fechaHoy.'<br>';
        echo '<b>Fecha de Expiracion de la cookie </b>'.$fechaExpira.' <br>';
        setcookie("ultimaVisita",$fechaHoy,time()+(7*60*24*365));
    }  
?>
</body>
</html>
