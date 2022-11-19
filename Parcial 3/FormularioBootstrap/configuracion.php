<?php
// $Nombre= "Fernando";
// $ApellidoMaterno = "Gomez";
// $ApellidoPaterno = "Dominguez";
// $Correo = "fernandogmz2001@gmail.com";
// $Ciudad = "Nuevo Laredo";
// $Estado = "Tamaulipas";
// $Direccion = "Los fresnos";
// $Telefono = "867 752 9509";
// $Password = "12345";
// $ConfirmPass = "12345";

$registro["Nombre"]= "Fernando";
$registro["ApellidoMaterno"] = "Gomez";
$registro["ApellidoPaterno"] = "Dominguez";
$registro["Correo"] = "fernandogmz2001@gmail.com";
$registro["Ciudad"] = "Nuevo Laredo";
$registro["Estado"] = "Tamaulipas";
$registro["Direccion"] = "Los fresnos";
$registro["Telefono"] = "867 752 9509";
$registro["Password"] = "12345";
$registro["ConfirmPass"] = "12345";


echo json_encode($registro);

// echo json_encode(array('Nombre' => $Nombre, 'ApellidoPaterno' => $ApellidoPaterno, 'ApellidoMaterno'=> $ApellidoMaterno, 'Correo' =>$Ciudad, 'Estado'=>$Estado, 'Direccion'=>$Direccion, 'Telefono'=> $Telefono, 'Password' => $pPassword, 'ConfirmPass'=>$ConfirmPass));
?>


