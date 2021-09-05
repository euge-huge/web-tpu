document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const countDeep = (arrayStr) => {
        return arrayStr.split('[').length - 1;
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