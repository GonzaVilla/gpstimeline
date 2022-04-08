// const screenH = window.screen.height;
// const flexcontainer = document.querySelector('div#flex-container');
// const content = flexcontainer.querySelectorAll('div.content');
// const cardbody = document.querySelectorAll(".card-body");


// if (screenH >= 820) {
    
// }

const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5');
const imagen6 = document.getElementById('imagen6');
const imagen7 = document.getElementById('imagen7');
const imagen8 = document.getElementById('imagen8');
const imagen9 = document.getElementById('imagen9');
const cargarimagen = (entradas, observador) =>{
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('visible');
            console.log("hola")
        }
        
    });
}



const observador = new IntersectionObserver(cargarimagen, {
    root: null,
    rootMargin: '30px 400px',
    threshold: 0.5
});
observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
observador.observe(imagen5);
observador.observe(imagen6);
observador.observe(imagen7);
observador.observe(imagen8);
observador.observe(imagen9);