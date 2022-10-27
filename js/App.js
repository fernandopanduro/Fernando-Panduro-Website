/* Header */
/* const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    var scroll = window.screenY;

    if (scroll > 50) {
        header.style.backgroundColor = 'transparent';
    } else {
        header.style.backgroundColor = 'var(--Color-Principal-Ligero)';
    }
}) */


/* Menu Hamburguesa */

// Selecciona los nodos
const bars = document.querySelector('.bars');
const line1 = document.querySelector('.line1__bar');
const line2 = document.querySelector('.line2__bar');
const line3 = document.querySelector('.line3__bar');
const containerResponsive = document.querySelector('.list-responsive');

bars.addEventListener('click', barsAnimate);

function barsAnimate() {
    // Despliega el menu responsive
    containerResponsive.classList.toggle('activelist-responsive')
    line1.classList.toggle('activeline1__bar');
    line2.classList.toggle('activeline2__bar');
    line3.classList.toggle('activeline3__bar');

    document.querySelector('.list__link1').addEventListener('click', barsAnimate);
    document.querySelector('.list__link2').addEventListener('click', barsAnimate);
    document.querySelector('.list__link3').addEventListener('click', barsAnimate);

}