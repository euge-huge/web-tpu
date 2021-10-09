document.addEventListener('DOMContentLoaded', () => {
    const month = document.getElementById('input-month');
    const year = document.getElementById('input-year');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ 
    const isContainFriday = (month, year) => {
        
    }
    // 

    console.log(new Date(-8.64e+7).getDay());

    button.addEventListener('click', () => {
        if (!month.value || !year.value) {
            result.innerHTML = "введите месяц и год!"
            result.classList.remove("false");
            result.classList.remove("true");
            return;
        }

        if (isAcceptedPassowrd(input.value)) {
            result.innerHTML = "пароль прошел проверку!";
            result.classList.remove("false");
            result.classList.add("true");
        } else {
            result.innerHTML = "пароль не прошел проверку!";
            result.classList.remove("true");
            result.classList.add("false");
        }
        
    })
})