//Micro Desafío 1
function test1(x, y) {
  return y - x;
}
console.log(test1(10, 40)); //40 - 10 = 30

//Micro Desafío 2
function test2(x, y) {
  // 10, y
  return x * 2; // multiplicar x por 2
  console.log(x);
  return x / 2;
}
test2(10); // 10 * 2 = 20

//Funciones simples
/*

* En todos los casos en que se reciban parámetros, utilizar el prompt para el ingreso por consola de los valores-


* 1. Crear una función que convierta pulgadas en centímetros.Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

*2. Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”

*3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

*4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

* 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considera que tu mes de trabajo tiene 40 horas.

*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores. 
*/

const prompt = require('prompt-sync')({ sigint: true });

// 1
function pulgadasCentimetros() {
  const pulgadas = prompt('Ingrese pulgadas: ');
  return pulgadas * 2.54;
}
console.log(pulgadasCentimetros());

//función flecha
const pulgadasCentimetrosArrow = () => {
  const pulgadas = prompt('Ingrese pulgadas: ');
  return pulgadas * 2.54;
};
console.log(pulgadasCentimetrosArrow());

// 2
function stringURL() {
  const string = prompt('Ingrese string: ');
  return `http://www.${string}.com`;
}
console.log(stringURL());

//función flecha
const stringURLArrow = () => {
  const string = prompt('Ingrese string: ');
  return `http://www.${string}.com`;
};
console.log(stringURLArrow());

// 3
function stringAdmiracion() {
  const string = prompt('Ingrese string: ');
  return `${string}!`;
}
console.log(stringAdmiracion());

//función flecha
const stringAdmiracionArrow = () => {
  const string = prompt('Ingrese string: ');
  return `${string}!`;
};
console.log(stringAdmiracionArrow());

// 4
function edadPerros() {
  const edad = prompt('Ingrese edad: ');
  return edad * 7;
}
console.log(edadPerros());

//función flecha

const edadPerrosArrow = () => {
  const edad = prompt('Ingrese edad: ');
  return edad * 7;
};
console.log(edadPerrosArrow());

// 5
function valorHora() {
  const sueldo = prompt('Ingrese sueldo: ');
  return sueldo / 40;
}
console.log(valorHora());

//función flecha
const valorHoraArrow = () => {
  const sueldo = prompt('Ingrese sueldo: ');
  return sueldo / 40;
};
console.log(valorHoraArrow());

// 6
function calculadorIMC() {
  const altura = prompt('Ingrese altura: ');
  const peso = prompt('Ingrese peso: ');
  return peso / (altura * altura);
}
console.log(calculadorIMC());

//función flecha
const calculadorIMCArrow = () => {
  const altura = prompt('Ingrese altura: ');
  const peso = prompt('Ingrese peso: ');
  return peso / (altura * altura);
};
console.log(calculadorIMCArrow());

/*

*7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Investigá qué hace el método de strings .toUpperCase()

*8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.


*9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia. Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

*/

//7
function mayuscula() {
  const ingrese = prompt('ingrese la palabra: ');
  return ingrese.toLocaleUpperCase();
}
console.log(mayuscula());

// función flecha

const mayusculaArrow = () => {
  const ingrese = prompt('ingrese la palabra: ');
  return ingrese.toLocaleUpperCase();
};
console.log(mayusculaArrow());

//8
function tipoDato() {
  const dato = prompt('Ingrese la palabra: ');
  return typeof dato;
}
console.log(tipoDato());

// función flecha

const tipoDatoArrow = () => {
  const dato = prompt('Ingrese la palabra: ');
  return typeof dato;
};
console.log(tipoDatoArrow());

//9
function calculaCircunferencia() {
  const radio = prompt('Ingrese el RADIO: ');
  return 2 * Math.PI * radio;
}
console.log(calculaCircunferencia());

const calculaCircunferencia = () => {
  const radio = prompt('Ingrese el RADIO: ');
  return 2 * Math.PI * radio;
};
console.log(calculaCircunferencia());
