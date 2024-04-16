<!-- runned by php8.1-cli on linux -->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Підтвердження замовлення</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST["product"];
    $material = $_POST["material"];
    $quantity = $_POST["quantity"];

    echo "<h1>Ваше замовлення прийнято</h1>";
    echo "<p>Замовлено виріб: $product</p>";
    echo "<p>Матеріал: $material</p>";
    echo "<p>Кількість: $quantity</p>";
} else {
    echo "<h1>Помилка!</h1>";
    echo "<p>Не вдалося обробити ваше замовлення. Будь ласка, спробуйте ще раз.</p>";
}
?>
</body>
</html>
