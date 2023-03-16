/*
 * Clase 7
 */

// falsy and truthy values

// falsy values
// undefined
// null
// 0
// ''
// NaN

// truthy values
// '0'
// ' '
// []

// AND
let resultado = 3 < 2 && 5 === 5 && 4 < 5;
console.log(resultado);

let resultado2 = 'gato' && 'perro' && 'pez';
console.log(resultado2);

// OR
let resultado3 = 3 > 3 || 5 === 8 || 4 === 4;
console.log(resultado3);

let resultado4 = 'gato' || 'perro' || 'pez';
console.log(resultado4);


// IF
let edad = 18;
if (edad >= 18) {
  console.log('Puede votar');
} else {
  console.log('No puede votar');
}

// IF ELSE IF
let edad2 = 18;
if (edad2 >= 18) {
  console.log('Puede votar');
} else if (edad2 === 17) {
  console.log('Puede votar en 1 año');
} else {
  console.log('No puede votar');
}

// TERNARY
let edad3 = 18;
let resultado5 = edad3 >= 18 ? 'Puede votar' : 'No puede votar';
console.log(resultado5);

// TERNARY
let edad4 = 18;
let resultado6 = edad4 >= 18 ? 'Puede votar' : edad4 === 17 ? 'Puede votar en 1 año' : 'No puede votar';
console.log(resultado6);

// Switch
let nombre = 'Juan';
switch (nombre) {
  case 'Juan':
    console.log('Hola Juan');
    break;
  case 'Pedro':
    console.log('Hola Pedro');
    break;
  case 'Maria':
    console.log('Hola Maria');
    break;

  default:
    console.log('usuario desconocido');
}



