//1 es piedra, 2 es papel y 3 es tijera
function Aleatorio (min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function Eleccion (jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🥌"
    } else if(jugada == 2){
        resultado = "papel 🧻"
    } else if (jugada == 3){
        resultado = "Tijera ✂"
    } else {
        resultado = "No seleccionaste nada"
    }
    return resultado
    
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc  = Aleatorio (1,3)

    jugador = prompt ("Elije 1 para piedra, 2 para papel o 3 para tijera")       
    
    alert ("Tu seleccionaste: "+ Eleccion (jugador))
    alert ("La PC elijio: " + Eleccion(pc))

    if (jugador == pc){
        alert ("EMPATE")
    } else if ((jugador == 1 && pc == 2) || (jugador == 2 && pc == 3) || (jugador == 3 && pc == 1)) {
        alert ("PERDISTE")
        //Se suma uno a la variable perdidas
        perdidas= perdidas + 1
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)){
        alert ("GANASTE")
        //Se suma uno a la variable triunfos
        triunfos = triunfos + 1
    }
}
alert ("Ganaste: " + triunfos + " veces. " + " Perdiste: " + perdidas + " veces.")
