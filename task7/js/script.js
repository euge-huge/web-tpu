document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const int = document.getElementById('int');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // ПОДПРОГРАММА (нечетный)
    const isOdd = (number) => {
        if (number % 2 !== 0)
            return true;
        else
            return false;
    }
    // 

    // АЛГОРИТМ 
    const refactorArray = (string, count) => {
        let array = string.split(',');

        array = array.map(item => Number(item));

        for (let i = 1; i <= count; i++) {
            if (isOdd(i)) {
                array = array.map(item => {
                    if (!isOdd(item)) {
                        return (item - 2);
                    } else {
                        return item;
                    }
                })
            } else {
                array = array.map(item => {
                    if (isOdd(item)) {
                        return item + 2;
                    } else {
                        return item;
                    }
                })
            }
        }
        
        

        return array;
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value || !int.value) {
            result.innerHTML = "Заполните поля!"
            return;
        }
        
        result.innerHTML = refactorArray(input.value, int.value);
    })
})