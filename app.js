// setting initial/default value count
let count = 0;
const number = document.querySelector('.number');
const btn = document.querySelectorAll('button');

// looping through increase, reset and decrease button
btn.forEach((button) => {
    
    button.addEventListener('click', (e) => {
        const currentClass = e.currentTarget.classList;
        if (currentClass.contains('decrease')) {
            count--; // decreasing count
        }else if (currentClass.contains('increase')) {
            count++; // increasing count
        } else {
            count = 0; // reseting to 0.
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
        
//         displaying number on screen
        number.textContent = count;

    })
})

