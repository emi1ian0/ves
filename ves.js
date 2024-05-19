<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Определение веса человека</title>
<style>
  body.light {
    background-image: url('light_background.jpg');
  }
  body.normal {
    background-image: url('normal_background.jpg');
  }
  body.heavy {
    background-image: url('heavy_background.jpg');
  }
</style>
</head>
<body>

<label for="weight">Введите ваш вес в килограммах:</label>
<input type="number" id="weight" placeholder="Введите вес">
<button onclick="changeBackground()">Подтвердить</button>

<script>
function changeBackground() {
    var weight = document.getElementById('weight').value;
    if (weight !== '') {
        weight = parseFloat(weight);

        if (weight < 50) {
            // Легкий
            document.body.className = 'light';
        } else if (weight >= 50 && weight <= 100) {
            // Нормальный
            document.body.className = 'normal';
        } else {
            // Тяжелый
            document.body.className = 'heavy';
        }
    } else {
        alert('Пожалуйста, введите ваш вес');
    }
}
</script>

</body>
</html>
