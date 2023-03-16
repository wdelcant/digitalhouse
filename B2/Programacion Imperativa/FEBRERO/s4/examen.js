/* Ejercicio 1 */

function parOImpar(numUno, numDos) {
  if (numUno % 2 == 0 && numDos % 2 == 0) {
    return numUno + numDos;
  } else if (numUno % 2 != 0 && numDos % 2 != 0) {
    return numUno / numDos;
  } else {
    return null;
  }
}

console.log(parOImpar(2, 4));

/* Ejercicio 2 */

function calculaPromedio(notas) {
  let promedio = 0;
  for (let i = 0; i < notas.length; i++) {
    promedio += notas[i];
  }
  promedio = promedio / notas.length;
  if (promedio > 7) {
    return true;
  } else {
    return false;
  }
}

console.log(calculaPromedio([7, 5, 9, 9]));

/* Ejercicio 3 */

let articulos = [
  {
    id: 4,
    precio: 3321,
    tipo: 'Deportivo',
    nombre: 'Zapatillas',
  },
  {
    id: 22,
    precio: 4482,
    tipo: 'Moda',
    nombre: 'Zapatillas',
  },
  {
    id: 1,
    precio: 3600,
    tipo: 'Moda',
    nombre: 'Zapatos',
  },
  {
    id: 44,
    precio: 8889,
    tipo: 'Moda',
    nombre: 'Remera',
  },
];

function articulosPrecioMax(articulos, precioMax) {
  let articulosFiltrados = [];

  for (let i = 0; i < articulos.length; i++) {
    if (articulos[i].precio <= precioMax) {
      articulosFiltrados.push(articulos[i]);
    }
  }
  return articulosFiltrados;
}

console.log(articulosPrecioMax(articulos, 4000));






// 


function promedio(notas) {
  let totalNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    totalNotas = totalNotas + notas[i];
  }
  totalNotas = totalNotas / notas.length;
  if (notas > 7) {
    return true;
  } else {
    return false;
  }
}

console.log(promedio([7, 5, 9, 9]));
