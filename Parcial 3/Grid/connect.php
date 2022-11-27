<?php
    $server= "localhost";
    $db= "usuariosregistrados";
    $user= "admin";
    $pass= "1234";
    $port="3308";
    $con = mysqli_connect($server,$user,$pass,$db,$port) or die("no se pudo conectar a la base de datos");
    $query= "select * from users";
    $registros= mysqli_query($con,$query) or die("problemas en la consulta");

    $result= mysqli_fetch_all($registros,MYSQLI_ASSOC);
    mysqli_close($con);
    echo json_encode($result)
?>