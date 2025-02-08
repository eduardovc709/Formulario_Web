
    //Variables globales, a estas cualquier funcion puede tener acceso
    //Estas variable se utilizaran para definir que ataque selecciono el jugador o enemigo ya sea agua, tierra o fuego.
    let ataquejugador
    let ataqueenemigo
    //Esta variable se utilizara para definir las vidas del jugador o enemigo con las que inicia el juego.
    let vidasjugador = 3
    let vidasenemigo = 3

    //La siguiente funcion permite cargar el codigo de game.html paraevitar errores
    function IniciarJuego (){
    //Se deben ocultar las secciones que no se van a tulizar en la primer fase del juego
        //Se utiliza style.dysplay con el valor none para ocultar
            let socultarataque = document.getElementById('seleccionar-ataque')
                socultarataque.style.display = 'none'
            let socultarreiniciar = document.getElementById('reiniciar')
                socultarreiniciar.style.display = 'none'

        //Se crea el nombre de la variable de la función seleccionarpersonaje
            //Se utiliza addEventListener con el valor click esperando el click del usuario en el boton de personaje y llamar la funcion seleccionarpersonaje
            let bpersonaje = document.getElementById('b-spersonaje')
                bpersonaje.addEventListener('click',seleccionarpersonaje)
            //Se utiliza addEventListener con el valor click esperando el click del usuario en el boton de fuego, agua o tierra y llamar la funcion de ataque
            let bfuego = document.getElementById('b-fuego')   
                bfuego.addEventListener('click', ataquefuego)
            let bagua = document.getElementById('b-agua')   
                bagua.addEventListener('click', ataqueagua)
            let btierra = document.getElementById('b-tierra')   
                btierra.addEventListener('click', ataquetierra)
            //Se utiliza addEventListener con el valor click esperando el click del usuario en el boton de reiniciar y llamar la funcion reiniciarjuego
            let brecargar = document.getElementById('b-reiniciar')   
                brecargar.addEventListener('click', reiniciarjuego)
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
            //Una vez que se tiene el personaje del jugador se llama la funcion del personaje del enemigo
            seleccionarpersonajeenemigo() 
            //Se utiliza style.dysplay con el valor block para mostar
            let socultarataque = document.getElementById('seleccionar-ataque')
                socultarataque.style.display = 'block'
            //Se utiliza style.dysplay con el valor noen para ocultar
            let socultarpersonaje = document.getElementById('seleccionar-personaje')
                socultarpersonaje.style.display = 'none'
        }
        //Se utiliza checked para verificar si esta marcado el check
        else if (plia.checked){
            spanjugador.innerHTML = 'Super Lia'
            //Una vez que se tiene el personaje del jugador se llama la funcion del personaje del enemigo
            seleccionarpersonajeenemigo() 
            //Se utiliza style.dysplay con el valor block para mostar
            let socultarataque = document.getElementById('seleccionar-ataque')
                socultarataque.style.display = 'block'
            //Se utiliza style.dysplay con el valor noen para ocultar
            let socultarpersonaje = document.getElementById('seleccionar-personaje')
                socultarpersonaje.style.display = 'none'
        }
        else if (pjohnny.checked){
            spanjugador.innerHTML = 'Johnny Bravo'
            //Una vez que se tiene el personaje del jugador se llama la funcion del personaje del enemigo
            seleccionarpersonajeenemigo() 
            //Se utiliza style.dysplay con el valor block para mostar
            let socultarataque = document.getElementById('seleccionar-ataque')
                socultarataque.style.display = 'block' 
            //Se utiliza style.dysplay con el valor noen para ocultar
            let socultarpersonaje = document.getElementById('seleccionar-personaje')
                socultarpersonaje.style.display = 'none'
        }
        else {
            alert ("Selecciona un personaje")
        }

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
    //La siguientes funciones permite indicar que ataque selecciono
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

        spanvidasjugador = document.getElementById('vidas-jugador')
        spanvidasenemigo = document.getElementById('vidas-enemigo')

        if (ataquejugador == ataqueenemigo){
            crearmensaje ("EMPATE")

        } else if ((ataquejugador == 'Fuego' && ataqueenemigo == 'Agua') || (ataquejugador == 'Agua' && ataqueenemigo == 'Tierra') || (ataquejugador == 'Tierra' && ataqueenemigo == 'Fuego')) {
            crearmensaje ("PERDISTE")
            vidasjugador--
            spanvidasjugador.innerHTML = vidasjugador
            contarvidas()            
         
        } else if ((ataquejugador == 'Fuego' && ataqueenemigo == 'Tierra') || (ataquejugador == 'Agua' && ataqueenemigo == 'Fuego') || (ataquejugador == 'Tierra' && ataqueenemigo == 'Agua')){
            crearmensaje ("GANASTE")      
            vidasenemigo--
            spanvidasenemigo.innerHTML = vidasenemigo
            contarvidas()
         }
    }
    //La siguiente funcion permite contar las vidas
    function contarvidas(){

        if(vidasjugador == 0){
           //alert("Ya parale PERDISTE el juego")
           crearmensajefinal ("Ya parale, PERDISTE")
        } else if (vidasenemigo == 0){
           //alert("Ya parale GANASTE el juego")
           crearmensajefinal ("Ya parale, GANASTE")
        }

    }
    //La siguiente funcion permite indicar al jugador que ataque se seleccionaron y quien gano por cada ataque
    function crearmensaje (resultado){
        let pmensaje = document.getElementById("mensajes")
        let parrafo = document.createElement('p')
        
        parrafo.innerHTML = 'Atacaste con ' + ataquejugador + ' ,Tu enemigo ataco con ' + ataqueenemigo +' ' + resultado
        pmensaje.appendChild(parrafo)

        
    }
    //La siguiente funcion permite indicar al jugador quien gano la partida
    function crearmensajefinal (resultadofinal){
        let pmensaje = document.getElementById("mensajes")
        let parrafo = document.createElement('p')
        
        parrafo.innerHTML = resultadofinal
            pmensaje.appendChild(parrafo)

        let bfuego = document.getElementById('b-fuego')   
            bfuego.disabled = true
        let bagua = document.getElementById('b-agua')   
            bagua.disabled = true
        let btierra = document.getElementById('b-tierra')   
            btierra.disabled = true
            
        let socultarreiniciar = document.getElementById('reiniciar')
            socultarreiniciar.style.display = 'block' 
        
    }
    //La siguiente funcion permite recargar la pagina
    function reiniciarjuego(){

        location.reload(true)

    }
    //La siguiente funcion permite crear un numero aleatorio
    function Aleatorio (min, max){
        return Math.floor(Math.random()*(max - min + 1) + min)
    }
    //El sigueinte metodo sirve para cargar de manera principal las funciones que contenga 
    window.addEventListener('load',IniciarJuego)
    //window.location.href = window.location.href + '?timestamp=' + new Date().getTime();
    
    /*
    -Se utiliza addEventListener para asignar funciones que se ejecutan cuando ocurre un evento específico en un elemento HTML
    -Variables globales, a estas cualquier funcion puede tener acceso
    -Se utiliza style.dysplay para establecer cómo se muestra un elemento en una página web
    -Se utiliza la propiedad checked para verificar si un elemento de tipo checkbox está marcado o no. Esta propiedad devuelve un valor booleano (true o false).
    -Se utiliza  la función location.reload() para recargar la página actual. Si se especifica true como parámetro, la página se recargará desde el servidor, asegurando que el usuario obtenga la versión más reciente de la página en lugar de usar la caché del navegador.
    */