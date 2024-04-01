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

function iniciarJuego() {
    let btnMascota = document.getElementById("btn-mascota");
    btnMascota.addEventListener("click", seleccionarMascotaJugador);

    let selectMascotas = document.getElementById("select-mascota");
    selectMascotas.addEventListener("change", function() {
        mascotaJugador = this.options[this.selectedIndex].value;
    });
}

function seleccionarMascotaJugador() {
    console.log(mascotaJugador);
}

window.addEventListener("load", iniciarJuego);