<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
</head>

<body>
    <form action="processar.php" method="POST">
        <p>
            <label>Número 1:</label>
            <input type="number" name="numero1">
        </p>
        <p>
            <label>Número 2:</label>
            <input type="number" name="numero2">
        </p>
        <p>
            <label>Operador:</label>
            <select name="operador">
                <option value="+"> + </option>
                <option value="-"> - </option>
                <option value="*"> * </option>
                <option value="/"> / </option>
            </select>
        </p>
        <button>Enviar</button>
    </form>
    <p>
        <a href="listar.php">Listar dados</a>
    </p>
</body>

</html>

</html>