document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // Позволяет произвести рассчет из строки
    const calculateString = (str) => {
        // Владицация вхождения строки
        if (typeof str !== 'string') {
            throw new Error("Введена не строка!");
        }

        // Если введено выражение с буквами, то будет выкинута ошибка
        try {
            return (new Function('return ' + str))();
        } catch {
            throw new Error("Некорректное выражение!")
        }
    }

    // АЛГОРИТМ
    const findZeroDivider = (string) => {
        // Владицация вхождения строки
        if (typeof string !== 'string') {
            throw new Error("Введена не строка!");
        }

        let result = null;

        // Проверка, что выражение вычислилось, если нет, то ошибку обрабатываем на уровне выше
        try {
            result = calculateString(string);
        } catch (e) {
            throw e;
        }

        // Проверяем значение на конечность, если было деление на ноль, то число бесконечно или NaN
        if(!isFinite(result)) {
            return true;
        }

        return false
    }
    // 

    button.addEventListener('click', () => {
        // Проверка на пустое значение
       if (!input.value) {
            result.innerHTML = "Введите выражение!"
            result.classList.remove('true');
            result.classList.remove('false');
            return;
       }

       let isZero = null;

    //    Обрабатываем ошибку, если невозможно вычислить выражение
       try {
        isZero = findZeroDivider(input.value)
       } catch (e) {
            result.innerHTML = e.message;
            result.classList.remove('true');
            result.classList.remove('false');
            return;
       }

    //    Выводим результат
       if (isZero) {
            result.innerHTML = "Обнаружено деление на ноль!"
            result.classList.remove('true');
            result.classList.add('false');
       } else {
            result.innerHTML = "Деления на ноль не обнаружено!"
            result.classList.remove('false');
            result.classList.add('true');
       }
    })
})