/* eslint-disable no-undef */
const fns = require('./problems');

describe('Este es nuestra prueba de demonstración, debe volver un array vacío', () => {
  test('debería devolver un array vacío', () => {
    expect(fns.demo([])).toEqual([]);
  });
});

xdescribe('soloStrings', () => {
  test('debería devolver solo los strings de un array', () => {
    expect(fns.soloStrings([10, 'Mike', '23', NaN, 'elefante'])).toEqual([
      'Mike',
      '23',
      'elefante',
    ]);
    expect(fns.soloStrings([{}, [], 99, false])).toEqual([]);
    expect(fns.soloStrings(['I', 'am', 'the', 'eggman'])).toEqual([
      'I',
      'am',
      'the',
      'eggman',
    ]);
  });
});

xdescribe('convertirTemps', () => {
  test('debería convertir farenheit a celsius para todas las temperaturas en el array', () => {
    expect(fns.convertirTemps([23, 140, 212, 41])).toEqual([-5, 60, 100, 5]);
    expect(fns.convertirTemps([-58, -22, -4, 14])).toEqual([
      -50, -30, -20, -10,
    ]);
    expect(fns.convertirTemps([104, 122, 158, 176])).toEqual([40, 50, 70, 80]);
  });
});

xdescribe('cuentaCaracter', () => {
  test('debería sumar el número total de caracteres en cada elemento en el array', () => {
    expect(fns.cuentaCaracter(['Stay', 'hungry', 'stay', 'foolish'])).toEqual([
      4, 6, 4, 7,
    ]);
    expect(fns.cuentaCaracter(['Where', 'is', 'the', 'stone'])).toEqual([
      5, 2, 3, 5,
    ]);
    expect(
      fns.cuentaCaracter([
        'Pack',
        'it',
        'up',
        'pack',
        'it',
        'in',
        'let',
        'me',
        'begin',
      ]),
    ).toEqual([4, 2, 2, 4, 2, 2, 3, 2, 5]);
  });
});

xdescribe('contieneFalso', () => {
  test('debería devolver un array de con solo valores falsos', () => {
    expect(fns.contieneFalso([100, {}, [], 'Mike'])).toEqual([]);
    expect(fns.contieneFalso([100, {}, NaN, 'Mike', '', null])).toEqual([
      NaN,
      '',
      null,
    ]);
    expect(fns.contieneFalso(["What's", 'up', 'doc'])).toEqual([]);
  });
});

xdescribe('palabrasDeLongitud', () => {
  test('debería devolver los strings que tengan el número determinado de caracteres o más', () => {
    expect(
      fns.palabrasDeLongitud(['emu', 'caterpiller', 'rooster'], 4),
    ).toEqual(['caterpiller', 'rooster']);
    expect(fns.palabrasDeLongitud(['John', 'Daenerys', 'Cersei'], 6)).toEqual([
      'Daenerys',
      'Cersei',
    ]);
  });
});

xdescribe('medidaANumero', () => {
  test('debería devolver las medidas a números', () => {
    expect(fns.medidaANumero(['10cm', '4.2cm', '205cm'])).toEqual([
      10, 4.2, 205,
    ]);
    expect(fns.medidaANumero(['100mm', '42mm', '2.05mm'])).toEqual([
      100, 42, 2.05,
    ]);
  });
});

xdescribe('numeroDeVocales', () => {
  test('debería devolvers el numero de total de vocales en el string', () => {
    expect(fns.numeroDeVocales('Stay classy San Diego')).toEqual(6);
    expect(fns.numeroDeVocales('I love lamp')).toEqual(4);
    expect(fns.numeroDeVocales('Whammy!')).toEqual(1);
  });
});

xdescribe('convertirATitulo', () => {
  test('debería hacer mayuscula la primer letra de cada palabra', () => {
    expect(fns.convertirATitulo('The lord of the rings')).toEqual(
      'The Lord Of The Rings',
    );
    expect(fns.convertirATitulo('The red hot chili peppers')).toEqual(
      'The Red Hot Chili Peppers',
    );
  });
});
