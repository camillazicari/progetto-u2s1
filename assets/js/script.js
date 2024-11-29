const nav = document.querySelector('nav');
const navBtn = document.querySelector('nav ul li button');
const header = document.querySelector('header')
const navHeight = 370;


window.addEventListener('scroll', function() {
    if (window.scrollY >= navHeight) {
        nav.classList.add('changecolor');
        navBtn.classList.add('colorChanger');
    } else  {
        nav.classList.remove('changecolor');
        navBtn.classList.remove('colorChanger');
    }
})

function randomLetters() {
    const gs = document.querySelectorAll('g[stroke-linecap=butt]');
    let random = Math.floor(Math.random()*gs.length);
    let currentM = gs[random];

    return currentM;
}

function changeOpacity() {
    let m = randomLetters();
    let opacity = parseInt(m.getAttribute('opacity'));
    if (opacity === 0) {
        m.setAttribute('opacity', 1);
    } else {
        m.setAttribute('opacity', 0);
    }
}

function invisibleVisibleM() {
    setInterval(function() {
        changeOpacity()
    }, 45);
}

window.onload = function() {
    invisibleVisibleM();
}