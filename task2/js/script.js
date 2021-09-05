document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const countArrays = (values) => {
        let count = 0;

        let arrays = values.split(';').map(a => a.split(','));

        arrays.map(array => {
            if (array.length > 1) {
                count++;
            }
            
            return array;
        })

        return count;
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "Введите массив!"
            return;
        }

        result.innerHTML = countArrays(input.value);
    })
})