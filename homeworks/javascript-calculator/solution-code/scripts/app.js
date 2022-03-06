// ! 💻 Acuerdate que cuando estas trabajando en el navegador, asegurate de salvar cambios en este archivo, y actualiza la ventana del navegador para volver a ejecutar el código.

// ! 👨‍🏫 Leé cuidadosamente el readme, y practica utilizando "window.prompt()" para coger la entrada del usuario.

// * Escribe tu código debajo.

let calcular = true;

while (calcular) {
  const primerNumero = parseFloat(window.prompt('¿Cual es el primer numero?'));
  const segundoNumero = parseFloat(
    window.prompt('¿Cual es el segundo numero?'),
  );
  const operador = window.prompt('¿Te gustaria +,-,* o /   ?');

  if (operador === '+') {
    window.alert(primerNumero + segundoNumero);
  }
  if (operador === '-') {
    window.alert(primerNumero - segundoNumero);
  }
  if (operador === '/') {
    window.alert(primerNumero / segundoNumero);
  }
  if (operador === '*') {
    window.alert(primerNumero * segundoNumero);
  }
  calcular = window.confirm('¿Te gustaría ir de nuevo?');
}

console.log('Gracias, adios');
