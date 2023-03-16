/*
1) Crear un array llamado misMascotas

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto
deberá tener:
● nombre
● raza
● edad
● sonido
● un método que nos retorne ese sonido 2 veces 
Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame aumentarEdad2, que va a hacer un trabajo más fino:
● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto,que será secuencial y que empezará en 1.
*/

const misMascotas = [
  {
    nombre: 'Pepita',
    raza: 'Caniche',
    edad: 3,
    sonido: 'Guau',
    sonido2Veces: function () {
      return this.sonido + ' ' + this.sonido;
    },
  },
  {
    nombre: 'Pepita',
    raza: 'Caniche',
    edad: 3,
    sonido: 'Guau',
    sonido2Veces: function () {
      return this.sonido + ' ' + this.sonido;
    },
  },
  {
    nombre: 'Pepita',
    raza: 'Caniche',
    edad: 3,
    sonido: 'Guau',
    sonido2Veces: function () {
      return this.sonido + ' ' + this.sonido;
    },
  },
];

console.log(misMascotas);

function aumentarEdad(arrayMascotas) {
  for (let i = 0; i < arrayMascotas.length; i++) {
    arrayMascotas[i].edad++;
    // arrayMascotas[i].edad = arrayMascotas[i].edad + 1;
  }
}

aumentarEdad(misMascotas);
console.log(misMascotas);

function aumentarEdad2(arrayMascotas) {
  for (let i = 0; i < arrayMascotas.length; i++) {
    //con operador ternario
    // arrayMascotas[i].edad = arrayMascotas[i].edad < 6 ? arrayMascotas[i].edad + 1 : arrayMascotas[i].edad + 2;

    //con if

    if (arrayMascotas[i].edad < 6) {
      arrayMascotas[i].edad++;
    } else if (arrayMascotas[i].edad >= 6 && arrayMascotas[i].edad <= 10) {
      arrayMascotas[i].edad += 2;
    } else {
      arrayMascotas[i].edad += arrayMascotas[i].edad / 2;
      // arrayMascotas[i].edad = arrayMascotas[i].edad + arrayMascotas[i].edad / 2;
      // arrayMascotas[i].edad = arrayMascotas[i].edad * 1.5;
      // arrayMascotas[i].edad *= 1.5;
    }
  }
}

aumentarEdad2(misMascotas);
console.log(misMascotas);




function generarId(arrayMascotas) {
  // agregar propiedad id a cada objeto
  for (let i = 0; i < arrayMascotas.length; i++) {
    arrayMascotas[i].id = i + 1;
    // arrayMascotas[i].id = i;
  }
}

generarId(misMascotas);
console.log(misMascotas);
