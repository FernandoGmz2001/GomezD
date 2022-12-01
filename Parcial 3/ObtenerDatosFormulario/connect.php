<?php

    $id_Empleado = $_POST['Id'];
    $server= "localhost";
    $db= "usuariosregistrados";
    $user= "admin";
    $pass= "1234";
    $port="3307";
    $con = mysqli_connect($server,$user,$pass,$db,$port) or die("no se pudo conectar a la base de datos");
    $query= "select * from users where Id = $id_Empleado";
    
    $registros= mysqli_query($con,$query) or die("problemas en la consulta");
    // $result= mysqli_fetch_all($registros);
    $result = mysqli_fetch_array($registros,MYSQLI_ASSOC);
    // mysqli_close($con);
    echo json_encode($result)
?>