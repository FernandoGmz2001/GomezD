<?php
require_once('./FPDF/fpdf.php');
$nombre = $_POST['nombre'];
$apellido_paterno = $_POST['apellido_paterno'];
$apellido_materno = $_POST['apellido_materno'];
$telefono = $_POST['telefono'];

require "./code128.php";
// $pdf = new FPDF();
$pdf = new PDF_Code128('p','mm','letter');
$pdf->SetMargins(17, 17, 17);
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);
$pdf->SetTextColor(32,100,210);
$pdf->Cell(40,10,'XyferCorp');

$pdf->Ln(10);

$pdf->SetFont('Arial','',10);
$pdf->SetTextColor(39,39,51);
$pdf->Cell(150,9,'RUC: 00000000000');

$pdf->Ln(5);

$pdf->Cell(150,9,'Direccion: Av. Siempre Viva 742');

$pdf->Ln(5);

$pdf->Cell(150,9,'Telefono: 867 766 5432');

$pdf->Ln(5);

$pdf->Cell(150,9,'Email: fernando.xyfercorp@gmail.com');

$pdf->Ln(10);

$pdf->Cell(30,7,'Fecha de emision:');
$pdf->SetTextColor(97,97,97);
$pdf->Cell(116,7,(date('d/m/Y',strtotime("02-12-2022"))." ".date("h:s A")));
// $pdf->Ln(10);

$pdf->SetFont('Arial','B',10);
$pdf->SetTextColor(39,39,51);
$pdf->Cell(35,7,'Factura Nro. 3');

$pdf->Ln(7);


$pdf->SetFont('Arial','',10);
$pdf->SetTextColor(39,39,51);
$pdf->Cell(13,7,'Cliente:');
$pdf->SetTextColor(97,97,97);
$pdf->Cell(60,7,''.$nombre.' '.$apellido_paterno.' '.$apellido_materno.'');
$pdf->SetTextColor(39,39,51);
$pdf->Cell(8,7,'Doc:');
$pdf->SetTextColor(97,97,97);
$pdf->Cell(60,7,'DNI: 00000000000');
$pdf->SetTextColor(39,39,51);
$pdf->Cell(7,7,'Tel:');
$pdf->SetTextColor(97,97,97);
$pdf->Cell(35,7,''.$telefono);
$pdf->SetTextColor(39,39,51);

$pdf->Ln(50);
$pdf->SetFillColor(39,39,51);
$pdf->SetDrawColor(23,83,201);
$pdf->Code128(72,$pdf->GetY(),"COD000001V0001",70,20);
$pdf->SetXY(12,$pdf->GetY()+21);
$pdf->SetFont('Arial','',12);
$pdf->MultiCell(0,5,("COD000001V0001"),0,'C',false);


$pdf->Output();
?>