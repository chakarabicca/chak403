const logo = document.querySelector('.logo');

setInterval(() => {
    logo.style.filter = `drop-shadow(0 0 10px red)`;
    setTimeout(() => {
        logo.style.filter = `drop-shadow(0 0 2px red)`;
    }, 300);
}, 600);
