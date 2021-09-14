document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const letters = document.getElementById('letters-result');
    const decimal = document.getElementById('decimal-result');

    // АЛГОРИТМ
    const countChars = (string) => {
        if (typeof string !== 'string') {
            throw new Error("Введена не строка!");
        }

        let lettersCount = 0;
        let decimalCount = 0;

        const strArray = string.split("");

        strArray.map(char => {
            if (char.toLowerCase() != char.toUpperCase()) lettersCount++;

            if (/\d/.test(char)) decimalCount++;
        })

        return {
            decimal: decimalCount ? decimalCount : "не найдено",
            letters: lettersCount ? lettersCount : "не найдено",
        }
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            letters.innerHTML = "Пустая строка"
            decimal.innerHTML = "Пустая строка"
            return;
        }

        const chars = countChars(input.value);

        letters.innerHTML = chars.letters
        decimal.innerHTML = chars.decimal
    })
})