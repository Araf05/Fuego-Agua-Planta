let mascotaJugador = "";
let mascotaEnemigo = "";
let ataqueJugador = "";
let ataqueEnemigo = "";
let resultado = "";
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let btnMascota = document.getElementById("btn-mascota");
    btnMascota.addEventListener("click", seleccionarMascotaJugador);

    let selectMascotas = document.getElementById("select-mascota");
    selectMascotas.addEventListener("change", function() {
        mascotaJugador = this.options[this.selectedIndex];
    });
    
    let btnFuego = document.getElementById("btn-fuego");
    btnFuego.addEventListener("click", ataqueFuego);
    let btnAgua = document.getElementById("btn-agua");
    btnAgua.addEventListener("click", ataqueAgua);
    let btnPlanta = document.getElementById("btn-planta");
    btnPlanta.addEventListener("click", ataquePlanta);
}

function seleccionarMascotaJugador() {
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    if( (mascotaJugador.value != undefined) && (mascotaJugador.value != "") ){
        spanMascotaJugador.innerHTML = mascotaJugador.innerHTML;
        seleccionarMascotaEnemigo();
    } else {
        console.log("No has seleccionado ninguna mascota!");
        spanMascotaJugador.innerHTML = "";
    }
    
}

function seleccionarMascotaEnemigo() {
    mascotaEnemigo =  document.getElementById("select-mascota").options[aleatorio(1,6)].innerHTML;
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    spanMascotaEnemigo.innerHTML = mascotaEnemigo;
}

function elegirAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(1,3);
    switch(ataqueAleatorio)
    {
        case 1:
            ataqueEnemigo = "AGUA";
        break;
        case 2:
            ataqueEnemigo = "PLANTA";
        break;
        case 3:
            ataqueEnemigo = "FUEGO";
        break;
    }
    crearMensaje();
}

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    elegirAtaqueEnemigo();
    
}
function ataqueAgua() {
    ataqueJugador = "AGUA";
    elegirAtaqueEnemigo();
}
function ataquePlanta() {
    ataqueJugador = "PLANTA";
    elegirAtaqueEnemigo();
}

function crearMensaje() {
    batallar();

    let sectionMensaje = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota atacó con " +ataqueJugador+ ", la mascota del enemigo atacó con " +ataqueEnemigo+ " - " +resultado;
    sectionMensaje.appendChild(parrafo);
}

function batallar() {
    if (ataqueJugador == ataqueEnemigo) {
        resultado = "EMPATE 🤝";
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "PLANTA" ||
        ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"   ||
        ataqueJugador == "PLANTA" && ataqueEnemigo == "AGUA"  ) {
        resultado = "GANASTE 🎉";
        vidasEnemigo--;
    } else {
        resultado = "PERDISTE 🥶";
        vidasJugador--;
    }

    actualizarVidas();
}

function actualizarVidas() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    spanVidasJugador.innerHTML = vidasJugador;

    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    spanVidasEnemigo.innerHTML = vidasEnemigo;
}

function aleatorio(min, max){
    return Math.floor( Math.random()*( max - min + 1 ) + min );
}

window.addEventListener("load", iniciarJuego);