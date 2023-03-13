<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <?php

        $numero1 = intval($_POST["numero1"]);
        $numero2 = intval($_POST["numero2"]);

        $valid = true;

        if($numero1 <= 0){
            echo "<p>Número 1 Inválido</p>";
            $valid = false;
        }
        if($numero2 <= 0){
            echo "<p>Número 2 Inválido</p>";
            $valid = false;
        }

        $con = new mysqli("localhost", "root", "", "devweb_projeto_01");

        if($valid){

            $stmt = $con->prepare("insert into soma(numero1, numero2, resultado) values (?, ?, ?)");

            $resultado = $numero1 + $numero2;

            $stmt->bind_param("iii", $numero1, $numero2, $resultado);
            $stmt->execute();
            echo "<p>$numero1 + $numero2 = $resultado gravado com sucesso!</p>";
            $stmt->close();
        }

        echo "<hr>";

        $stmt = $con->prepare("select * from soma order by id");
        $stmt->execute();
        $result = $stmt->get_result();

        while ($row = $result->fetch_array()){
            echo "<b>", $row["numero1"], " + ", $row["numero2"], " = ", $row["resultado"], "</b><br>";
        }

        $result->close();
        $stmt->close();
        $con->close();  
    ?>
</body>
</html>