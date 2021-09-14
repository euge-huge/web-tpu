document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const int = document.getElementById('int');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // ПОДПРОГРАММА (нечетный)
    const isOdd = (number) => {
        // Проверка, что аргумент число
        if (typeof number !== "number") throw new Error("Аргумент должен быть числом!");

        if (number % 2 !== 0)
            return true;
        else
            return false;
    }
    // 

    // АЛГОРИТМ 
    const refactorArray = (string, count) => {
        // Проверки, что аргумент строка и число
        if (typeof string !== 'string') {
            throw new Error("Введена не строка!");
        }
        if (!Number(count)) {
            throw new Error("Количество преобразований должно быть числом!");
        }

        let array = string.split(',');

        array = array.map(item => {
            if (!Number.isInteger(Number(item))) throw new Error("Ошибка! Все элементы должны быть целочислены!")
            return Number(item)}
        );

        for (let i = 1; i <= count; i++) {
            if (isOdd(i)) {
                array = array.map(item => {
                    if (!isOdd(item)) {
                        return (item - 2);
                    } else {
                        return item;
                    }
                })
            } else {
                array = array.map(item => {
                    if (isOdd(item)) {
                        return item + 2;
                    } else {
                        return item;
                    }
                })
            }
        }
        
        

        return array;
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value || !int.value) {
            result.innerHTML = "Заполните поля!"
            return;
        }
        
        try {
            result.innerHTML = refactorArray(input.value, int.value);
        } catch (e) {
            result.innerHTML = e.message;
        }
    })
})