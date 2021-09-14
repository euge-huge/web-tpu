document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ 
    const countPairs = (string) => {
        let count = 0;
        
        let array = null;
        
        // ВАЛИДАЦИЯ: проверка на строку, только у строки есть метод split, при неверном формате строки будет не найдено пар, что тоже укладывается в логику
        try {
            array = string.split(",");
        } catch {
            throw new Error("Введена не строка!");
        }
        

        var result = {};
        array.forEach(key => {
            // Обрабатываем ошибку, если элементы массива не числа
            if (!Number.isInteger(Number(key.trim()))) throw new Error("Ошибка! Все элементы должны быть целочислены!")

            if (result[key.trim()] != undefined)
                ++result[key.trim()];
            else
                result[key.trim()] = 1;
        });

        for (let key in result) {
            count = count + Math.floor(result[key]/2);
        }

        return count ? count : 'пар не найдено!';
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Введите массив!"
            return;
        }
        
        // Обработка ошибки
        try {
            result.innerHTML = countPairs(input.value);
        } catch (e) {
            result.innerHTML = e.message;
        }
    })
})