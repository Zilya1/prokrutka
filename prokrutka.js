<!DOCTYPE html>
<html>
<head>
    <title>Нестандартная прокрутка клавишами</title>
    <style>
        /* Добавьте достаточно контента, чтобы страница могла прокручиваться */
        .long-content {
            height: 2000px;
        }
    </style>
</head>
<body>

<div class="long-content">
    <!-- Ваш контент -->
    Нажмите W или S для прокрутки страницы.
</div>

<script>
document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Определите высоту прокрутки, эта величина может быть изменена по желанию
    const scrollAmount = 50;

    // При нажатии клавиши W прокрутка вверх
    if (key.toLowerCase() === 'w') {
        window.scrollBy(0, -scrollAmount);
        event.preventDefault(); // Отменить стандартное действие
    }

    // При нажатии клавиши S прокрутка вниз
    else if (key.toLowerCase() === 's') {
        window.scrollBy(0, scrollAmount);
        event.preventDefault(); // Отменить стандартное действие
    }

    // Вы можете добавлять дополнительные клавиши и действия по мере необходимости
});
</script>

</body>
</html>
