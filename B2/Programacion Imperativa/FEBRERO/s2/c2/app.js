/* 
*  FUNCIONES

*  Tipos
*  1 - Declarativas
*  2 - Expresión
*  3 - Arrow
*/

/*
 * FUNCIÓN DECLARADA
 */

//declarar una función que imprima por consola un mensaje
function saludar() {
  console.log('Hola Mundo');
}
saludar();

// declarar una función que Retorne un mensaje y la invoque
function saludar2() {
  return 'Hola Mundo';
}
// invocar la función
console.log(saludar2());

// Declarar una función que reciba un parámetro y lo imprima por consola
function saludar3(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar3('Martin'));

/*
 * FUNCIONES EXPRESADA
 */

const saludar = function (name) {
  return 'Hola ' + name;
};
console.log(saludar('Wilson'));

const saludarExpresada = function (nombre, apellido) {
  return 'Hola' + nombre + '' + apellido;
};

console.log(saludarExpresada('Ailin', 'Stanley'));

/*
 * FUNCIONES FLECHA
 */

const saludarFlecha = nombre => {
  return 'Hola ' + nombre;
};

console.log(saludarFlecha('Ailin'));

const saludarFlecha2 = nombre => 'Hola ' + nombre;

console.log(saludarFlecha2('Martin'));
