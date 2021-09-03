document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const isLetters = (value) => {
        for (let char of value) {
            if (char.toLowerCase() == char.toUpperCase()) return false;
        }
        return true;
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Пустая строка"
            result.classList.remove('false');
            result.classList.remove('true');
            return;
        }

        if (isLetters(input.value)) {
            result.innerHTML = "Содержит только строчные и прописные буквы"
            result.classList.remove('false');
            result.classList.add('true');
        } else {
            result.innerHTML = "Содержит не только строчные и прописные буквы"
            result.classList.remove('true');
            result.classList.add('false');
        }
    })
})