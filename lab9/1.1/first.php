<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Замовлення меблів</title>
    <script>
        function validateForm() {
            var product = document.getElementById("product").value
            var material = document.getElementById("material").value
            var quantity = document.getElementById("quantity").value;

            if (product === "" || material === "" || quantity === "") {
                alert("Будь ласка, заповніть всі поля")
                return false
            }
            return true
        }

        function validateInput(inputField) {
            var x = inputField.value;
            if (x === "") {
                alert("Поле не може бути порожнім")
                inputField.focus()
                inputField.select()
                return;
            }
            x = parseInt(x);
            if(x < 0){
                alert("значення не може бути меншим за нуль")
                inputField.focus()
                inputField.select()
                return
            }
        }
    </script>
</head>
<body>
    <h1>Замовлення меблів</h1>
    <form action="second.php" method="post" onsubmit="return validateForm()">
        <label for="product">Виберіть виріб:</label>
        <select id="product" name="product">
            <option value="">Оберіть виріб</option>
            <option value="шафа">Шафа</option>
            <option value="стіл">Стіл</option>
            <option value="сервант">Сервант</option>
        </select><br><br>

        <label for="material">Виберіть матеріал:</label>
        <select id="material" name="material">
            <option value="">Оберіть матеріал</option>
            <option value="дуб">Дуб</option>
            <option value="горіх">Горіх</option>
            <option value="бук">Бук</option>
        </select><br><br>

        <label for="quantity">Введіть кількість:</label>
        <input type="text" id="quantity" name="quantity" onchange="validateInput(this)"><br><br>

        <input type="submit" value="Замовити">
    </form>
</body>
</html>
 