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

/* Fine */

// Seleccionar  elementos
const header = document.querySelector('#header');
const presentation__description = document.querySelector('#presentation__description');
const presentation__picture = document.querySelector('#presentation__picture');
const about = document.querySelector('#about__titles');
const aboutDescription = document.querySelector('#about__description');
const imgHeart = document.querySelector('#img__heart');
const imgBulb = document.querySelector('#img__bulb');
const projects = document.querySelector('#projects__titles');
const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');
const testimonials = document.querySelector('#testimonials__titles');
const testimonial1 = document.querySelector('#testimonial1');
const testimonial2 = document.querySelector('#testimonial2');
const testimonial3 = document.querySelector('#testimonial3');
const testimonial4 = document.querySelector('#testimonial4');
const footer = document.querySelector('#footer');

// Carga los elementos dependiento la posicion del los mismos
const cargarElementos  = (entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('show'); // Muestra el elemento
        } else {
            entrada.target.classList.remove('show'); // /oculta el elemento
        }
    });
};

// Observa cuando un elemento entra al viewport
const observador = new IntersectionObserver(cargarElementos, {
    root: null, //Punto de referencia por defecto  es  el wimdow
    rootMargin: "0px", // Margin
    threshold: .2 // Porcentaje del elemento que este dentro
});

//Ejecutar funcion
observador.observe(header);
observador.observe(presentation__description);
observador.observe(presentation__picture);
observador.observe(about);
observador.observe(aboutDescription);
observador.observe(imgHeart);
observador.observe(imgBulb);
observador.observe(projects);
observador.observe(card1);
observador.observe(card2);
observador.observe(card3);
observador.observe(testimonials);
observador.observe(testimonial1);
observador.observe(testimonial2);
observador.observe(testimonial3);
observador.observe(testimonial4);
observador.observe(footer);


/* Btn-Up */

const btnUp = document.querySelector('.btn-up');
window.pageYOffSet
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        btnUp.classList.add('btn-up--active');
    } else {
        btnUp.classList.remove('btn-up--active');
    }
})


/* Header Seccion */

/* const list = document.querySelector('#menu');
const sections = document.querySelectorAll('.section');
let indicador = list.querySelector('a');

let indexSeccionActiva;

const observador2 = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            indexSeccionActiva = [...sections].indexOf(entrada.target);
            indicador.style.color = 'var(--Color-Principal)';
            console.log('Aqui estoy')
        } else {
            indicador.style.color = 'white';
        }
    });
}, {
    rootMargin: '0px',
	threshold: .1
});

// Asignamos un observador a cada una de las secciones
sections.forEach(section => observador2.observe(section));
console.log(sections); */

/* Parallax Img */

    let imgHeartParallax = document.querySelector('.about__img--heart');
    let imgBulbParallax = document.querySelector('.about__img--bulb');

window.addEventListener('scroll', function () {
    let valueScroll = window.scrollY;
    imgHeartParallax.style.bottom = -valueScroll * .1 + 'px'
    imgBulbParallax.style.top = valueScroll * 0.1 + 'px'
});
    