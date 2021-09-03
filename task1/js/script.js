document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const trueResult = document.getElementById('true');
    const falseResult = document.getElementById('false');

    // АЛГОРИТМ
    const isIsogram = (str) => {
        for(let i = 0; i <= str.length; i++) {
            for(let j = i+1; j <= str.length; j++) {
                if(str[j] == str[i]) {
                    return false;
                }
            }
        }
        return true;
    }
    // 

    button.addEventListener('click', () => {
        if(isIsogram(input.value)) {
            falseResult.classList.remove('false');
            trueResult.classList.add('true');
        } else {
            trueResult.classList.remove('true');
            falseResult.classList.add('false');
        }
    })
})