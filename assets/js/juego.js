let numeroAzar = Math.floor(Math.random()*100);
let entrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let boton = document.getElementById('botonComprueba');
let intento = document.getElementById('intento');
let pro = document.getElementById('pro');
let intentos = 0;

console.log(numeroAzar);


function ingresar()
{
  let numeroIngresado = parseInt(entrada.value);
  intentos++;
  intento.textContent = intentos;

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) 
  {
    mensaje.textContent = 'Introduce un número válido entre el 1 al 100';
    mensaje.style.color = 'red'
    console.log(numeroIngresado);  
    return;
  }
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = 'Felicidades acertaste el número';
    mensaje.style.color = 'green';
    entrada.disabled = true;
    boton.disabled = true;
    if (intentos === 1) {
      pro.textContent = "Wow lo lograste a la primera";
      pro.style.color = '#20819c';
    }
  } else if(numeroIngresado < numeroAzar)
  {
    mensaje.textContent = 'Ingresa un número mas alto';
    mensaje.style.color = '#20819c';
  } else if(numeroIngresado > numeroAzar)
  {
    mensaje.textContent = 'Ingresa un número mas bajo';
    mensaje.style.color = 'orange';
  }
}