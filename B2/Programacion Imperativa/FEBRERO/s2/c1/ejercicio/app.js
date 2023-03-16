const prompt = require('prompt-sync')({ sigint: true });

let nombre = 'Monica';
let temperatura = 30;
let lluvia = false;
let vivoEnEdificio = true;
let pisoAscensor = 5;
let hora_Actual = 12;
let hora_Apertura = 8;
let hora_Cierre = 20;
let cantidadQueso = 150;
const precioQueso = 11300;

nombre = prompt('Ingrese su nombre: ');
temperatura = prompt('Ingrese la temperatura: ');
lluvia = prompt('¿Llueve?: ');
vivoEnEdificio = prompt('¿Vive en un edificio?: ');
pisoAscensor = prompt('Ingrese el piso del asensor: ');
hora_Actual = prompt('Ingrese la hora actual: ');
cantidadQueso = prompt('Ingrese la cantidad de queso: ');

const compraQueso = (cantidadQueso * precioQueso) / 1000;

console.log(``);
console.log(`=========== Hola ${nombre} ===========`);
console.log(`La temperatura de hoy es de ${temperatura}°C`);
console.log(`¿Llueve? ${lluvia}`);
console.log(`¿Vive en un edificio? ${vivoEnEdificio}`);
console.log(`Estas en el piso numero ${pisoAscensor}`);
console.log(`Son las ${hora_Actual}hs`);
console.log(`La fiambraría abre a las  ${hora_Apertura}hs`);
console.log(`La fiambraría cierra a las ${hora_Cierre}hs`);
console.log(`Compraste ${cantidadQueso}gr de queso`);
console.log(`La deuda con Monica es de $${compraQueso} CLP`);
console.log(`Que tengas buen regreso a casa ${nombre}`);
console.log(`====================================`);
console.log(``);
console.log(``);

// La mejor opción para realizar un console.log es la de llamar a la variable y concatenaría con el texto que se desea mostrar, en este caso el nombre de la variable es "nombre" y el texto que se desea mostrar es "Hola" por lo que se debe llamar a la variable y concatenaría con el texto que se desea mostrar.

console.log(`Mi dia laboral`);

let diaLaboral = 'Lunes';
let horaEntrada = 8;
let horaSalida = 18;
let horaAlmuerzo = 12;
let horaRegresoAlmuerzo = 13;

console.log(`Mi dia laboral comienza el ${diaLaboral}`);
console.log(`Ingreso a las ${horaEntrada}hs`);
console.log(`Salgo a las ${horaSalida}hs`);
console.log(`Almuerzo a las ${horaAlmuerzo}hs`);
console.log(`Regreso del almuerzo a las ${horaRegresoAlmuerzo}hs`);
