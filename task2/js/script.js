document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    const result = document.getElementById('result');

    // АЛГОРИТМ
    const countTrue = (values) => {
        let count = 0;

        values.map(value => {
            if (value === '1') {
                count++;
            }
            
            return value;
        })

        return count;
    }
    // 

    button.addEventListener('click', () => {
        const values = input.value.split(' ');

        result.innerHTML = countTrue(values);
    })
})