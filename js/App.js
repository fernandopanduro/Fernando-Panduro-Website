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

// Observa cuando un elemento entraen el viewport
const observador = new IntersectionObserver(cargarElementos, {
    root: null, //Punto de referencia por defecto  es  el wimdow
    rootMargin: "0px", // Margin
    threshold: .2 // Porcentaje del elemento que este dentro
});

//Ejecutar funcion
observador.observe(header);
observador.observe(presentation__description);
observador.observe(presentation__picture);
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