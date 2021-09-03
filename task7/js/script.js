document.addEventListener('DOMContentLoaded', () => {
    const int1 = document.getElementById('int1');
    const int2 = document.getElementById('int2');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // ПОДПРОГРАММА
    const isPolindrom = (number) => {
        return number === Number(number.toString().split('').reverse().join(''));
    }
    // 

    // АЛГОРИТМ 
    const countPolindroms = (v1, v2) => {
        let count = 0;

        for (let num = Number(v1); num <= v2; num++) {
            if (isPolindrom(num)) count++;
        }

        return count;
    }
    // 

    button.addEventListener('click', () => {
        if (!int1.value || !int2.value) {
            result.innerHTML = "Введите обе границы!"
            return;
        }
        
        result.innerHTML = countPolindroms(int1.value, int2.value);
    })
})