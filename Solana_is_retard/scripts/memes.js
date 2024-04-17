let imagen1 = "../img/meme1.jpeg";
let imagen2 = "../img/meme2.jpeg";
let imagen3 = "../img/meme3.jpeg";
let imagen4 = "../img/meme4.jpeg";


let imagenes = [imagen1, imagen2, imagen3, imagen4];

let anterior = document.getElementById("anterior");
let siguiente = document.getElementById("siguiente");
let imagen = document.getElementById("imagen-slider");

let i = 0;
imagen.src = imagenes[i];

anterior.addEventListener("click", function () {
    i = (i - 1 + imagenes.length) % imagenes.length; 
    cambiarImagen(imagenes[i]);
});

siguiente.addEventListener("click", function () {
    i = (i + 1) % imagenes.length; 
    cambiarImagen(imagenes[i]);
});

function cambiarImagen(src) {
    imagen.style.opacity = 0; 
    imagen.addEventListener("transitionend", function() {
        imagen.src = src; 
        imagen.style.opacity = 1; 
        centrarImagen(imagen); 
    }, { once: true }); 
}

function centrarImagen(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
