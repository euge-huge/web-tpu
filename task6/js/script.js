document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ 
    const countPairs = (string) => {
        let count = 0;

        const array = string.split(",");

        var result = {};
        array.forEach(key => {
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
        
        result.innerHTML = countPairs(input.value);
    })
})