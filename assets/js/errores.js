// Manejo de errores en JS 

// try {
//   // * Intentando hacer alguna función
//   console.log('Iniciando proceso');
//   // Error capturado el mensaje no se mostrará
//   // throw('Haciendo error');
//   setTimeout(() => {
//     console.log("El back responde:");
//     throw('Haciendo error');
//   }, 500);
// } catch (error) {
//   console.log("Error: \n"+error);
// } 

// finally {
// // * Final de lo que deseamos
// console.log("Esto es al final del programa");
// }
// ! Asincronismo 

// * El asincronismo son funciones que van a realizarse en tiempos diferentes

/**
 * Es importante para el cosnumo de API's
 * * Las API's son datos que consumimos de otros programas, esto nos permite hacer la transferencia de datos de una forma sencilla 
 * 
 */

// * Definición de una promesa 
// let promesa = new Promise((response, reject) => 
// {
//   // Definición de la promesa
//   let resp = 
//   {
//     response: 200,
//     description: 'Información de respuesta'
//   }
//   // Todo sale correctamente
//   // response(resp)
//   // Fallo 
//   reject('Error personalizado')
// });

// promesa.then(res => {
//   console.log(res.description);
// }).catch(error => {
//   // console.warn(error);
//   console.error(error);
// })

// * Mismo ejemplo con un tiempo de espera 

let promesaPasada = new Promise((response, reject) => 
{
  setTimeout(() => {
    let resp = 
  {
    response: 200,
    description: 'Información de respuesta'
  }
  response(resp)
  reject('Error personalizado')
  }, 3000);
});

// promesa.then(res => {
//   console.log(res.description);
// }).catch(error => {
//   console.error(error);
// })

// * Async Await, son promesas con suggar syntax ( Es decir solo es un atajo para que se vea mejor visualmente )
// * Visualmente es mucho mas entendible
// * Cuando se ejecuten varias promesas lo que se va a tardar en resolver todas, será la mas larga, ya que todas inician al mismo tiempo
// * Eso es a lo que se refiere el asincronismo 

let promesa1 = new Promise((response, reject) => 
{
  setTimeout(() => {
    let resp = 
  {
    response: 200,
    description: 'Información de respuesta'
  }
  response(resp)
  reject('Error personalizado')
  }, 3000);
});

let promesa2 = new Promise((response, reject) => 
{
  setTimeout(() => {
    let resp = 
  {
    response: 200,
    description: 'Información de respuesta tardada'
  }
  response(resp)
  reject('Error personalizado')
  }, 5000);
});

let promesa3 = new Promise((response, reject) => 
{
  setTimeout(() => {
    let resp = 
  {
    response: 200,
    description: 'Información de respuesta rápida'
  }
  response(resp)
  reject('Error personalizado')
  }, 2500);
});

//* Se declara una función asincrona 

async function ejectutarPromesas()
{
  let respuestaPromesa1 = await promesa1
  console.log(respuestaPromesa1);
  let respuestaPromesa2 = await promesa2
  console.log(respuestaPromesa2);
  let respuestaPromesa3 = await promesa3
  console.log(respuestaPromesa3);
}

ejectutarPromesas()