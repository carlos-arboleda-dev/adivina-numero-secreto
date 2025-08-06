let numeroMaximo = 10;
let listaNumeroSorteado = []
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let nummeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    console.log(numeroSecreto);
    if (nummeroDeUsuario == numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1)  ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(nummeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
};

function intentoDeUsuario(){
    alert("Click desde el boton");
    return; 
}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon tods los numeros posibles');
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

function consdicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //injdicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    consdicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

consdicionesIniciales();
