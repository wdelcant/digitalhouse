/*
 * Loop de pares
 */

function loopDePares(numero) {
  for (let i = 0; i <= 100; i++) {
    resultado = i + numero;
    if (resultado % 2 == 0) {
      console.log(`El número ${i} + ${numero} es ${resultado} y es par.`);
    }
  }
}
loopDePares(2);

/*
 * Loop de impares con palabra
 */

function loopDeImpares(numero, palabra) {
  for (let i = 0; i <= 100; i++) {
    resultado = i + numero;
    if (resultado % 2 !== 0) {
      console.log(palabra);
    }
  }
}
loopDeImpares(2, 'Palabra');

/*
 * Sumatoria
 */

function sumatoria(numero) {
  let suma = 0;
  for (let i = 0; i <= numero; i++) {
    suma += i;
    // suma = suma + i; // otra forma de escribirlo
    // console.log(i); //para mostrar los números que se suman en la consola
  }
  return suma;
}
console.log(sumatoria(3));

/*
 * Nuevo arreglo
 */

function nuevoArreglo(numero) {
  let array = [];
  for (let i = 1; i <= numero; i++) {
    array.push(i);
  }
  return array;
}
console.log(nuevoArreglo(5));

/*
 * Similar String.split()
 */

function split(palabra) {
  let array = [];
  for (let i = 0; i < palabra.length; i++) {
    array.push(palabra[i]);
  }
  return array;
}

console.log(split('hola'));

/*
 * Manejando dos arreglos
 */

function arrayHandler(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    console.log(`Soy ${array1[i]} y yo soy ${array2[i]}`);
  }
}
arrayHandler([1, 2, 3, 4], ['h', 'o', 'l', 'a']);

/*
 * Palíndromo
 */

function palindromo(palabra) {
  let palabraAlReves = '';
  for (let i = palabra.length - 1; i >= 0; i--) {
    palabraAlReves += palabra[i];
  }
  if (palabraAlReves === palabra) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromo('anilina'));
console.log(palindromo('wilson'));
console.log(palindromo('arroz'));
console.log(palindromo('oso'));
