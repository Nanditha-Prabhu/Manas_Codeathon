let digits = document.querySelectorAll('.col');
let delay = 2000;

digits.forEach((element, index) => {

    setTimeout(() => {

        element.style.animationDelay = `${(index+1) * delay}ms`;

    }, 0);

});
