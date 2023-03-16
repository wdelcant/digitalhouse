/* 
CLASE 8
* Bucles
* For
* While
* Do While
*/

//FOR

for (let i = 0; i < 10; i++) {
  //SCOPE O ALCANCE DE LA VARIABLE BLOQUE DE CÓDIGO
  console.log(`Numero: ${i}`);
}

//WHILE

let i = 0;
while (i < 10) {
  console.log(`Numero: ${i}`);
  i++;
}

//DO WHILE

let i = 100;
do {
  console.log(`Numero: ${i}`);
  i++;
} while (i < 10);

//FOR EACH

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach(function (pendiente, index) {
  console.log(`${index} : ${pendiente}`);
});

//FOR IN

const automovil = {
  modelo: 'Camaro',
  motor: 6.1,
  anio: 1969,
  marca: 'Chevrolet',
};

for (let auto in automovil) {
  console.log(`${auto} : ${automovil[auto]}`);
}

//FOR OF

const pendientes2 = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente of pendientes2) {
  console.log(pendiente);
}




