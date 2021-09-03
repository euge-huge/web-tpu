document.addEventListener('DOMContentLoaded', () => {
    const int = document.getElementById('int');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ 
    const average = (value) => {
        value = Math.abs(value);

        let sum = 0;
        let d = 0;

        while (value > 0) {
            sum = sum + (value % 10);
            value = Math.floor(value/10);
            d++;
        }

        return sum/d;
    }
    // 

    button.addEventListener('click', () => {
        if (!int.value || int.value == 0) {
            result.innerHTML = "Введите число!"
            return;
        }
        
        result.innerHTML = average(int.value);
    })
})