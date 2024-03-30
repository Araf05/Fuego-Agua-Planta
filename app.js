
function aleatorio(min, max){
    return Math.floor( Math.random( max - min + 1 ) + min );
}

let jugador = 0;
let pc = aleatorio(1, 3);

jugador = prompt("Elige un numero entre el 1 y el 3: ");

alert("Elegiste " + jugador);
alert("Pc eligio " + pc);

if(pc == jugador){
    alert("EMPATE");
} else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
    alert("GANASTE");
} else if(jugador == 1 && pc == 2 || jugador == 2 && pc == 3 || jugador == 3 && pc == 1){
    alert("PERDISTE");
} else {
    alert("Opción no valida!");
}