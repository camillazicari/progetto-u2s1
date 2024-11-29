const nav = document.querySelector('nav');
const header = document.querySelector('header')

const navHeight = 380

window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        nav.classList.add('changecolor');
    } else  {
        nav.classList.remove('changecolor');
    }
})
