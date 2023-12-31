function reveal1() {
    let r1 = document.querySelectorAll(".reveal1");
    for (i = 0; i < r1.length; i++) {
        let wh = window.innerHeight;     /*wh= window height */
        let th = r1[i].getBoundingClientRect().top;   /*th= top height */
        let vh = 150;    /*view height  */
        if (th < wh - vh) {
            r1[i].classList.add("active1");
        }
        else {
            r1[i].classList.remove("active1");
        }
    }
}

function reveal2() {
    let r2 = document.querySelectorAll(".reveal2");
    for (i = 0; i < r2.length; i++) {
        let wh = window.innerHeight;
        let th = r2[i].getBoundingClientRect().top;
        let vh = 150;
        if (th < wh - vh) {
            r2[i].classList.add("active2");
        }
        else {
            r2[i].classList.remove("active2");
        }
    }
}

window.addEventListener("scroll", reveal1);
window.addEventListener("scroll", reveal2);


let digits = document.querySelectorAll('.digit');
let delay = 1000;
let totalTime;

digits.forEach((element, index) => {

    if (index == digits.length - 1) {
        totalTime = (index + 1) * delay
    }

    setTimeout(() => {

        element.style.animationDelay = `${(index + 1) * delay}ms`;

    }, 0);

});

setTimeout(() => {
    let numbers = document.querySelector('.numbers');
    numbers.classList.toggle('dispNone');
}, totalTime + delay);

setTimeout(() => {
    let options = document.querySelector('.options');
    options.classList.toggle('dispNone');
}, totalTime + delay);



