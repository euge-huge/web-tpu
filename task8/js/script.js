document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ 
    const indexesOfLetters = (string) => {
        // Проверка, что аргумент строка
        if (typeof string !== 'string') {
            throw new Error("Введена не строка!");
        }

        const charArray = string.split("");

        // Сюда сохраняем индексы заглавных букв
        let indexes = [];

        // Проходимся по каждому символу, проверяем, что это вообще буква, проверяем, что она заглавная и сохраняем
        charArray.map((char, index) => {
            if (char.toLowerCase() !== char.toUpperCase() && char === char.toUpperCase()) {
                indexes.push(index);
            }
        })

        // Сортировка индексов по возрастанию (форматирование) (на всякий случай)
        indexes = indexes.sort((a, b) => a - b);

        return indexes.length ? indexes : "заглавных букв не найдено!";
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Введите строку!"
            return;
        }
        
        // Обработка ошибок
        try {
            result.innerHTML = indexesOfLetters(input.value);
        } catch (e) {
            result.innerHTML = e.message;
        }
    })
})