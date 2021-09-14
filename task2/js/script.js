document.addEventListener('DOMContentLoaded', () => {
    const data = document.getElementById('data');
    
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    const countArrays = (item, count = 0) => {
        if (Array.isArray(item)){ // Тут же валидация данных функции, если придет не массив, то будет выведен 0 сразу, что может служить ложным значением
            return (count > 0 ? 1 : 0) + item.map((value) => {
                return countArrays(value, count + 1)
            }).reduce((a, b) => a + b , 0)
        }
        return 0;
    }

    const array = [1, 2, [2, [3, 4], 5], [2, [4, 6], 3], [1, 3, 4]];

    data.innerHTML = "[1, 2, [2, [3, 4], 5], [2, [4, 6], 3], [1, 3, 4]]";

    button.addEventListener('click', () => {
        if (!Array.isArray(array)) {
            result.innerHTML = "Входные данные не содежат корневого массива!"
            return;
        }

        result.innerHTML = countArrays(array);
    })
})