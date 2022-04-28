/* eslint-disable no-unused-vars */

// ? Debajo hay una función de demonstración para practicar ejecutando pruebas automatizadas.
// ? Añade la declaración 'return []' a la función, guarda el archivo.
// ? Ejecuta las pruebas con el comando dentro de tu terminal 'npm run test'
// ? Ahora debes ver que esta prueba de demonstración esta pasando en el informe de salida.
function demo(array) {
  return [];
}

// ? utilizando `filter` escribe una función que devuelve todos los articulos string dentro de un array
// ? eg: soloStrings([10, 'Mike', '23', NaN, 'elefante']) => ['Mike', '23', 'elefante']

function soloStrings(array) {
  return array.filter((articulo) => typeof articulo === 'string');
}

// ? utilizando `map` escribe una función que convierte un array de valores Farenheit a grados Celsius
// ? eg: convertirTemps([23, 140, 212, 41]) => [-5, 60, 100, 5]

function convertirTemps(array) {
  return array.map((temp) => ((temp - 32) * 5) / 9);
}

// ? utilizando `map` escribe una función que devuelve el numero total de caracteres de cada articulo en un array de palabras
// ? eg: cuentaCaracter(['Stay', 'hungry', 'stay', 'foolish']) => [4, 5, 4, 7]

function cuentaCaracter(array) {
  return array.map((palabra) => palabra.length);
}

// ? utilizando `filter` escribe una función que devuelve un array continendo solo valores falsos
// ? eg: contieneFalso([100, {}, [], 'Mike']) => false, contieneFalso([100, {}, NaN, 'Mike', '', null]) => [NaN, '', null]

function contieneFalso(array) {
  return array.filter((el) => !el);
}

// ? utilizando un método array, escribe una función que devuelve los articulos string de un array que tengan un número determinado de caracteres o más
// ? eg: palabrasDeLongitud(['emu', 'caterpiller', 'rooster'], 4) => ['caterpiller', 'rooster']

function palabrasDeLongitud(array, minLongitud) {
  return array.filter((palabra) => palabra.length >= minLongitud);
}

// ? utilizando en método array, escribe una función que convierte un array de medidas en strings, a un array de números
// ? eg: medidaANumero(['10cm', '4.2cm', '205cm']) => [10, 4.2, 205]

function medidaANumero(array) {
  return array.map((num) => parseFloat(num));
}

// ? utilizando `split` y `filter` escribe una función que cuenta el número de vocales en una frase
// ? eg: numeroDeVocales('Stay classy San Diego') => 6

function numeroDeVocales(string) {
  const vocales = 'aeiouAEIOU';

  return string.split('').filter((i) => vocales.includes(i)).length;
}

// ? utilizando `split`, `map` y `join`, escribe una función que hace mayuscula la primer letra de cada palabre en una frase
// ? eg: convertirATitulo('The lord of the rings') => 'The Lord Of The Rings'

function convertirATitulo(string) {
  return string
    .split(' ')
    .map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.substr(1);
    })
    .join(' ');
}

// ! por favor no cambies lo de abajo ✋

module.exports = {
  demo,
  soloStrings,
  convertirTemps,
  cuentaCaracter,
  contieneFalso,
  palabrasDeLongitud,
  medidaANumero,
  numeroDeVocales,
  convertirATitulo,
};
