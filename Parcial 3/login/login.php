<?php
session_start();
$usuario = $_POST['usuario'];
$pas = $_POST['password'];

if( isset($_SESSION['usuario'])){
    // printf ("REANUDANDO SESION <br>");
    printf ("Bienvenido de nuevo:".$_SESSION['usuario']);
}else{
    $_SESSION['usuario'] = $usuario;
    printf ("Nueva sesión <br>");
    printf ("Bienvenido: %s <br>", $usuario);
}
?>