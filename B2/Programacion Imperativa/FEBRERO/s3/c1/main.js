//1.
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
// Devuelve undefined ya que no existe un elemento en la posición 5 del array

//2.
let grupoDeAmigos = [
  'Harry',
  'Ron',
  'Hermione',
  'Spiderman',
  'Hulk',
  'Ironman',
  'Penélope Glamour',
  'Pierre Nodoyuna',
  'Patán',
];
console.log(grupoDeAmigos[5]);
// Devuelve Ironman ya que es el elemento en la posición 5 del array

//3.
let str = 'una string cualquiera';
let arrayAleatorio = [
  'Digital',
  'House',
  'true',
  'string',
  '123',
  'false',
  '54',
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);
// Devuelve una string cualquiera ya que es el elemento en la posición -1 del array, ademas cabe destacar que el array empieza en la posición 0 por lo que el elemento en la posición 7 es la string str

/* 1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente. */

let peliculas = [
  'star wars',
  'totoro',
  'rocky',
  'pulp fiction',
  'la vida es bella',
];

console.log(peliculas[0]);
console.log(peliculas[1]);
console.log(peliculas[2]);
console.log(peliculas[3]);
console.log(peliculas[4]);

/* 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().
 */

function peliculasMayus(peliculas) {
  for (let i = 0; i < peliculas.length; i++) {
    peliculas[i] = peliculas[i].toUpperCase();
    // console.log(peliculas)
  }
  return peliculas;
}
console.log(peliculasMayus(peliculas));

/* 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas */

let peliculasAnimadas = [
  'toy story',
  'finding Nemo',
  'kung-fu panda',
  'wally',
  'fortnite',
];

function peliculasNuevas() {
  let peliculasNuevas = peliculas.concat(peliculasAnimadas);
  for (let i = 0; i < peliculasNuevas.length; i++) {
    peliculasNuevas[i] = peliculasNuevas[i].toUpperCase();
  }
  return peliculasNuevas;
}
console.log(peliculasNuevas());
