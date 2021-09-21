document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ 
    const isAcceptedPassowrd = (password) => {
        // Проверка, что пароль является строкой
        if (typeof password !== 'string') {
            throw new Error("Пароль должен быть строкой!");
        }

        return /^\d{4}$|^\d{6}$/.test(password);
    }
    // 

    button.addEventListener('click', () => {
        if (!input.value) {
            result.innerHTML = "введите пароль!"
            result.classList.remove("false");
            result.classList.remove("true");
            return;
        }

        let isAccepted = null;

        // Обработка ошибок
        try {
            isAccepted = isAcceptedPassowrd(input.value)
        } catch (e) {
            result.innerHTML = e.message;
            result.classList.remove("false");
            result.classList.remove("true");
            return;
        }

        // Вывод результата
        if (isAccepted) {
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