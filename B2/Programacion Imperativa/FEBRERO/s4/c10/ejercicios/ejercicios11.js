let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: 'Cuenta Corriente',
    saldoEnPesos: 27771,
    titularCuenta: 'Abigael Natte',
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: 'Caja de Ahorro',
    saldoEnPesos: 8675,
    titularCuenta: 'Ramon Connell',
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: 'Caja de Ahorro',
    saldoEnPesos: 27363,
    titularCuenta: 'Jarret Lafuente',
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: 'Cuenta Corriente',
    saldoEnPesos: 32415,
    titularCuenta: 'Ansel Ardley',
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: 'Cuenta Unica',
    saldoEnPesos: 18789,
    titularCuenta: 'Jacki Shurmer',
  },
];

// 2
let banco = {
  clientes: arrayCuentas,
};

// 3
banco.consultarCliente = function (titular) {
  for (let i = 0; i < banco.clientes.length; i++) {
    // recorre el array de clientes
    if (banco.clientes[i].titularCuenta === titular) {
      // compara el titular con el nombre del cliente
      return banco.clientes[i]; // retorna el cliente
    }
  }
};

// 4
banco.deposito = function (titular, cantidad) {
  // recibe el titular y la cantidad a depositar
  let cliente = banco.consultarCliente(titular); // busca el cliente
  cliente.saldoEnPesos += cantidad; // suma la cantidad al saldo del cliente
  console.log(
    `Depósito realizado, su nuevo saldo es: $${cliente.saldoEnPesos}`
  );
};

//5
banco.extraccion = function (titular, monto) {
  // recibe el titular y el monto a extraer
  let cliente = banco.consultarCliente(titular); // busca el cliente
  if (cliente.saldoEnPesos - monto < 0) {
    // verifica si hay fondos suficientes
    console.log('Fondos insuficientes');
  } else {
    cliente.saldoEnPesos -= monto; // resta el monto al saldo del cliente
    console.log(
      `Extracción realizada correctamente, su nuevo saldo es: $${cliente.saldoEnPesos}`
    );
  }
};

// código creando una cuenta nueva y realizando algunas operaciones.
let cuentaNueva = {
  nroCuenta: 1234567890,
  tipoDeCuenta: 'Cuenta Corriente',
  saldoEnPesos: 100000,
  titularCuenta: 'Wilson Del Canto',
};

banco.clientes.push(cuentaNueva); //crea nueva cuenta
banco.deposito('Wilson Del Canto', 1000); //deposita $1000 a la cuenta
banco.extraccion('Wilson Del Canto', 50000); //extrae $50000 de la cuenta

// Propiedad única
function propiedadUnica(array, propiedad) {
  // recibe un array y una propiedad
  let arrayNuevo = [];
  for (let i = 0; i < array.length; i++) {
    // recorre el array
    arrayNuevo.push({ [propiedad]: array[i][propiedad] }); // agrega al array nuevo un objeto con la propiedad y el valor de la propiedad
  }
  return arrayNuevo;
}

let array = [
  { nombre: 'Wilson', edad: 32 },
  { nombre: 'Dayana', edad: 28 },
];

console.log(propiedadUnica(array, 'edad'));
console.log(propiedadUnica(array, 'nombre'));

// Calculador de notas
let alumno = {
  nombre: 'Wilson',
  legajo: 123456,
  notas: [10, 8, 9, 7, 6, 5, 4, 3, 2, 1],
  notaAprobacion: 6,
  promedio: function () {
    let suma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      // recorre el array de notas
      suma += this.notas[i]; // suma las notas
    }
    return suma / this.notas.length; // retorna el promedio
  },
};
console.log(alumno.promedio()); // imprime el promedio

alumno.aprobado = function () {
  if (this.promedio() >= this.notaAprobacion) {
    // compara el promedio con la nota de aprobación
    return 'Aprobado';
  } else {
    return 'Desaprobado';
  }
};
console.log(alumno.aprobado()); // imprime si está aprobado o no
