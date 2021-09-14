document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const countDeep = (arrayStr) => {
        if (typeof arrayStr !== 'string') {
            throw new Error("Введена не строка!");
        }

        const chars = arrayStr.split("");

        // Проверка на лишние символы
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] !== '[' && chars[i] !== ']') return "Лишние символы в строке!"
        }

        const left = arrayStr.split('[');
        const right = arrayStr.split(']');

        // Проверка, что справа и слева одинаковая глубина массива
        if (right.length === left.length)
            return left.length - 1;
        else
            return "Невозможно измерить глубину!"
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Введите строку!"
            return;
        }

        result.innerHTML = countDeep(input.value);
    })
})