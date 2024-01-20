let numeroSecreto = 0;
let numeroIntentos = 0;
asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
asignarTextoElemento('p', 'escriba un numero del 1 al 10');
function asignarTextoElemento(elemnto, texto) {
  let elemntoHTML = document.querySelector(elemnto);
  elemntoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `ACERTASTE EL NUMERO EN ${numeroIntentos} ${(numeroIntentos == 1) ? 'VEZ' : 'VECES'}`);
    let error = document.querySelector('#reiniciar').removeAttribute('disabled');
    console.log(error)
  }
  else {
    // esto pasa cuando el usuario no acierta el numero 
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'EL NUMERO SECRETO ES MENOR');
    }
    else {
      asignarTextoElemento('p', 'EL NUMERO SECRETO ES MAYOR');
    }
  }
  numeroIntentos++;
  limpiarCaja();

}
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
  return;
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
  asignarTextoElemento('p', 'escriba un numero del 1 al 10');
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();