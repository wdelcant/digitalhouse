/*
  Escribir las siguientes tres funciones:
  - anterior(nro): devuelve el número anterior al número nro.
  - triple(nro): devuelve el triple del número nro.
  - anteriorDelTriple(nro): devuelve el número anterior al triple del número nro.

*/

function anterior(nro) {
  return nro - 1;
}

function triple(nro) {
  return nro * 3;
}

function anteriorDelTriple(nro) {
  //let tripleRes = triple(nro);
  //let resFinal = anterior(tripleRes);
  //return resFinal;
  return anterior(triple(nro));
}

console.log(anterior(5));
console.log(triple(5));
console.log(anteriorDelTriple(5));
