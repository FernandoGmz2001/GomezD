<!DOCTYPE html>
<html lang="en">
    <?php
    session_start();
    if( !isset($_SESSION['usuario']) || empty($_SESSION['usuario']) ){
        header("Location: ./index.html");
    }
    ?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="main">
        <text><?php echo $_SESSION['usuario'];?></text>
    </div>
    
</body>
</html>