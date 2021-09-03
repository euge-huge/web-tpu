document.addEventListener('DOMContentLoaded', () => {
    const int1 = document.getElementById('int1');
    const int2 = document.getElementById('int2');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ (Евклида)
    const gcd = (value1, value2) => {
        value1 = Math.abs(value1);
        value2 = Math.abs(value2);

        while (value1 != value2) {
            if (value1 > value2) {
                let tmp = value1;
                value1 = value2;
                value2 = tmp;
            }
            value2 = value2 - value1;
        }

        return value1;
    }
    // 

    button.addEventListener('click', () => {
        if (!int1.value || !int2.value) {
            result.innerHTML = "Введите оба числа!"
            return;
        }
        
        result.innerHTML = gcd(int1.value, int2.value);
    })
})