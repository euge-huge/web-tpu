document.addEventListener('DOMContentLoaded', () => {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');

    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const whoWin = (p1, p2) => {
        if (!p1 || !p2) return "Не выбраны ходы"

        if (p1 === p2) return "Ничья!"
        
        if ((p1 === 'stone' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'stone')) {
            return "Победил первый игрок!"
        } else {
            return "Победил второй игрок!"
        }
    }
    // 

    button.addEventListener('click', () => {
        const winner = whoWin(p1.value, p2.value);

        if (winner === "Не выбраны ходы" || winner === "Ничья!") {
            result.classList.remove("win");
        } else {
            result.classList.add("win");
        }

        result.innerHTML = winner;
    })
})