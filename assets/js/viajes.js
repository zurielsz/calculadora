import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del dom 
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

console.log(enlaces);
enlaces.forEach( function(enlace) 
{
  enlace.addEventListener('click', function()
  {
    let contenido = obtenerContenido(this.textContent.trim());
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

function obtenerContenido(enlace) {
  let contenido = {
    'Barcelona' : barcelona,
    'Roma' : roma,
    'París' : paris,
    'Londres' : londres,
  };
  return contenido[enlace];
}