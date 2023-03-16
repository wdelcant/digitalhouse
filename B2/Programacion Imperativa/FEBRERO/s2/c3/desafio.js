let edad = 19;

if (edad <= 0) {
  console.log('Error edad inválida, por favor ingrese un número válido');
} else if (edad < 18) {
  console.log('No puede pasar al bar.');
} else if (edad < 21) {
  console.log('Puede pasar al bar, pero no puede tomar alcohol.');
} else if (edad === 21) {
  console.log('Felicidades por haber llegado a la mayoría de edad');
} else if (edad % 2 !== 0) {
  console.log(
    '¿Sabías que tu edad es impar?, Puede pasar al bar y tomar alcohol.'
  );
} else {
  console.log('Puede pasar al bar y tomar alcohol.');
}

/*

Declara una función llamada totalAPagar() que reciba como parámetros: vehículo y litrosConsumidos.
A continuación, definí y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones:

  ● Si el vehículo es “coche”, el precio por litro es de $86.
  ● Si es “moto”, ha de ser $70.
  ● Si es “autobús”, ha de ser $55.
  ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
  ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

*/

function totalAPagar(vehiculo, litrosConsumidos) {
  let precioPorLitro;
  let precioAdicional;

  switch (vehiculo) {
    case 'coche':
      precioPorLitro = 86;
      break;
    case 'moto':
      precioPorLitro = 70;
      break;
    case 'autobús':
      precioPorLitro = 55;
      break;
    default:
      console.log('No se encuentra vehiculo');
      return;
  }

  if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
    precioAdicional = 50;
  } else if (litrosConsumidos > 25) {
    precioAdicional = 25;
  }

  return precioPorLitro * litrosConsumidos + precioAdicional;
}

totalAPagar('coche', '10');
