// setting initial value count
let count = 0;
const number = document.querySelector('.number');
const btn = document.querySelectorAll('button');


btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        const currentClass = e.currentTarget.classList;
        if (currentClass.contains('decrease')) {
            count--;
        }else if (currentClass.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count === 0) {
            number.style.color = 'hsl(237, 54%, 13%)';
        }
        if (count > 0) {
            number.style.color = 'hsl(199, 74%, 55%)';
        }
        if (count < 0) {
            number.style.color = 'hsl(360, 100%, 54%)';
        }
        number.textContent = count;

    })
})

