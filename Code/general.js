
window.addEventListener('load',loadScreen);

function loadScreen () {
    const screen = document.querySelector('.screen');
    screen.style.display ="none"
};

function toggleNavMenu() {
    const navMenu = document.querySelector('.alternative-nav-menu');
    if (navMenu.classList.contains('non-visible')) {
        navMenu.classList.remove('non-visible')
        
    } else {
        navMenu.classList.add('non-visible')
    }
}

