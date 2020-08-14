let menuOpen = false;
let menuBtn = document.getElementById('nav-menu-btn');
let mainNav = document.getElementsByClassName('main-nav')[0];

menuBtn.addEventListener('click', ()=>{
    if(menuOpen) {
        mainNav.style.height = '0px';
        menuOpen = false;
    } else {
        mainNav.style.height = '330px';
        menuOpen = true;
    }
});

window.onresize = () => {
    if(window.innerWidth > 900) {
        mainNav.style.height = '60px'
    } else {
        mainNav.style.height = '0px'
    }
}
