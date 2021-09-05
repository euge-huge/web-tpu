document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // Позволяет произвести рассчет из строки
    const calculateString = (str) => {
        return (new Function('return ' + str))();
    }

    // АЛГОРИТМ
    const findZeroDivider = (string) => {

        const exprs = string.split('/');

        for (let i = 0; i < exprs.length; i++) {
            if (calculateString(exprs[i]) === 0) return true;
        }

        return false
    }
    // 

    button.addEventListener('click', () => {
       if (!input.value) {
           result.innerHTML = "Введите выражение!"
           result.classList.remove('true');
            result.classList.remove('false');
           return;
       }

       console.log(findZeroDivider(input.value))
       if (findZeroDivider(input.value)) {
            result.innerHTML = "Обнаружено деление на ноль!"
            result.classList.remove('true');
            result.classList.add('false');
       } else {
            result.innerHTML = "Деления на ноль не обнаружено!"
            result.classList.remove('false');
            result.classList.add('true');
       }
    })
})