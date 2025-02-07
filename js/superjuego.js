
    //Variables globales
    let ataquejugador
    let ataqueenemigo

    //La siguiente funcion permite cargar el codigo de game.html paraevitar errores

    function IniciarJuego (){
    //Todo lo que este dentro de esta función va a ejecutarse una ves que el codigo se cargue
        //Se crea el nombre de la variable de la función seleccionarpersonaje
            bpersonaje = document.getElementById('b-spersonaje')
            bpersonaje.addEventListener('click',seleccionarpersonaje)

            let bfuego = document.getElementById('b-fuego')   
                bfuego.addEventListener('click', ataquefuego)
            let bagua = document.getElementById('b-agua')   
                bagua.addEventListener('click', ataqueagua)
            let btierra = document.getElementById('b-tierra')   
                btierra.addEventListener('click', ataquetierra)
    }
//La siguiente funcion permite indicar que ya seleccionaste un personaje del jugador

    function seleccionarpersonaje(){
        //Se agrega la condición para validar que personaje seleccionado por le jugador
        //Se crean variables para determinar el personaje del jugador
        let pleo = document.getElementById('Leo')
        let plia = document.getElementById('Lia')
        let pjohnny = document.getElementById('Johnny')
        let spanjugador = document.getElementById('np-jugador')

        if (pleo.checked){
           
            spanjugador.innerHTML = 'Super Leo'
        }
        else if (plia.checked){
            spanjugador.innerHTML = 'Super Lia'
        }
        else if (pjohnny.checked){
            spanjugador.innerHTML = 'Johnny Bravo'
        }
        else {
            alert ("Selecciona un personaje")
        }
        //Una vez que se tiene el personaje del jugador se llama la funcion del personaje del enemigo
        seleccionarpersonajeenemigo() 
    }

    //La siguiente funcion permite indicar el personaje del enemigo

    function seleccionarpersonajeenemigo(){
    //Se agrega la condición para validar que personaje tiene el enemigo
    //Se crean variables para determinar el personaje del enemigo
            //Se crea la variable para crear un personaje aleatorio
        let paleatorio = Aleatorio (1,3)
        let spanenemigo = document.getElementById('np-enemigo')

        if (paleatorio == 1){
            spanenemigo.innerHTML = 'Super Leo'
        }
        else if (paleatorio == 2){
            spanenemigo.innerHTML = 'Super Lia'
        }
        else {
            spanenemigo.innerHTML = 'Johnny Bravo'
        }
    }
    //La siguiente funcion permite indicar que ataque selecciono
    function ataquefuego(){
        ataquejugador = 'Fuego'
        ataquealeatorioenemigo()
    }
    function ataqueagua(){
        ataquejugador = 'Agua'
        ataquealeatorioenemigo()
    }
    function ataquetierra(){
        ataquejugador = 'Tierra'
        ataquealeatorioenemigo()
    }
    //La siguiente funcion permite indicar que ataque aleatorio es del enemigo
    function ataquealeatorioenemigo(){
        let ataquealeatorio = Aleatorio (1,3)

        if (ataquealeatorio == 1){
            ataqueenemigo = 'Fuego'
        } else if (ataquealeatorio == 2){
            ataqueenemigo = 'Agua'
        } else {
            ataqueenemigo = 'Tierra'
        }
        
        ganador()
    }

    //La siguiente funcion valida quien gano
    function ganador(){

        if (ataquejugador == ataqueenemigo){
            crearmensaje ("EMPATE")

        } else if ((ataquejugador == 'Fuego' && ataqueenemigo == 'Agua') || (ataquejugador == 'Agua' && ataqueenemigo == 'Tierra') || (ataquejugador == 'Tierra' && ataqueenemigo == 'Fuego')) {
            crearmensaje ("PERDISTE")
                        
        } else if ((ataquejugador == 'Fuego' && ataqueenemigo == 'Tierra') || (ataquejugador == 'Agua' && ataqueenemigo == 'Fuego') || (ataquejugador == 'Tierra' && ataqueenemigo == 'Agua')){
            crearmensaje ("GANASTE")      

        }
    }

    //La siguiente funcion permite indicar al jugador que ataque se seleccionaron y quien gano
    function crearmensaje (resultado){
        let pmensaje = document.getElementById("mensajes")
        let parrafo = document.createElement('p')
        
        parrafo.innerHTML = 'Atacaste con ' + ataquejugador + ' ,Tu enemigo ataco con ' + ataqueenemigo +' ' + resultado
        pmensaje.appendChild(parrafo)

        
    }

    function Aleatorio (min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
    }

    window.addEventListener('load',IniciarJuego)