// let opciones = ["FUEGO", "AGUA", "PLANTA"];

// function aleatorio(min, max){
//     return Math.floor( Math.random()*( max - min + 1 ) + min );
// }


// let jugador = 0;
// let pc = 0;
// let ganados = 0;
// let perdidos = 0;

// while(ganados < 3 && perdidos < 3){

//     pc= aleatorio(1, 3);
//     jugador = prompt("Elige: 1 para fuego, 2 para agua, 3 para planta");

//     alert("Elegiste " + opciones[jugador-1]);
//     alert("Pc eligio " + opciones[pc-1]);

//     if(pc == jugador){
//         alert("EMPATE");
//     } else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
//         alert("GANASTE");
//         ganados += 1;
//     } else if(jugador == 1 && pc == 2 || jugador == 2 && pc == 3 || jugador == 3 && pc == 1){
//         alert("PERDISTE");
//         perdidos += 1;
//     } else {
//         alert("Opción no valida!");
//     }
// }

// alert("Ganaste " + ganados + " veces. Perdiste " + perdidos + " veces.");


// let mascotas = ["hapodoge", "capipepo", "ratigueya", "langostelvis", "tucapalma", "pydos"];
let mascotaJugador = "";
let ataqueJugador;

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
    let ataqueAleatorio =  document.getElementById("select-mascota").options[aleatorio(1,3)].innerHTML;
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    spanMascotaEnemigo.innerHTML = ataqueAleatorio;
}

function ataqueFuego() {
    ataqueJugador = "FUEGO";
    console.log(ataqueJugador);
}
function ataqueAgua() {
    ataqueJugador = "AGUA";
    console.log(ataqueJugador);
}
function ataquePlanta() {
    ataqueJugador = "PLANTA";
    console.log(ataqueJugador);
}

function aleatorio(min, max){
    return Math.floor( Math.random()*( max - min + 1 ) + min );
}

window.addEventListener("load", iniciarJuego);