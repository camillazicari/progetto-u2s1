const nav = document.querySelector('nav');
const navBtn = document.querySelector('nav ul li button');
const header = document.querySelector('header')

const navHeight = 380

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        nav.classList.add('changecolor');
        navBtn.classList.add('colorChanger');
    } else  {
        nav.classList.remove('changecolor');
        navBtn.classList.remove('colorChanger');
    }
})
