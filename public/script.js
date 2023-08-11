let digits = document.querySelectorAll('.digit');
let delay = 2000;
let totalTime;

digits.forEach((element, index) => {

    if(index== digits.length-1)
    {
            totalTime = (index+1) * delay
    }

    setTimeout(() => {

        element.style.animationDelay = `${(index+1) * delay}ms`;

    }, 0);

});


setTimeout(() => {
    let numbers= document.querySelector('.numbers');
    numbers.classList.toggle('dispNone');
}, totalTime+delay);

setTimeout(() => {
    let options= document.querySelector('.options');
    options.classList.toggle('dispNone');
}, totalTime+delay);



