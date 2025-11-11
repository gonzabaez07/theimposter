let palabrascategoria = ""

function iniciarJuego() {
    let sectioninicio = document.getElementById("inicio")
    let sectionpreparacionJuego = document.getElementById("preparacion-juego")
    let sectionjuego = document.getElementById("juego")
    sectionjuego.style.display = "none"
    sectionpreparacionJuego.style.display = "none"
    let botonComenzar = document.getElementById("boton-comenzar")
    botonComenzar.addEventListener("click", configurarjuego)
}
function configurarjuego() {
    let sectioninicio = document.getElementById("inicio")
    let sectionpreparacionJuego = document.getElementById("preparacion-juego")
    sectionpreparacionJuego.style.display = "block"
    sectioninicio.style.display = "none"
 
}



//configuracion del juego


//cantidad de jugadores


let cantjugadores = seleccionarcantjugadores ()
function seleccionarcantjugadores (){
    let cantjugadores = document.getElementById("input-jugadores")
    if (cantjugadores < 3 || cantjugadores > 20){
        alert("El numero de jugadores debe ser entre 3 y 20")    
    } 
    return cantjugadores
}
//cantidad de impostores
let cantidadimpostores = seleccionarcantimpostores ()
function seleccionarcantimpostores (){
    let cantidadimpostores = document.getElementById("input-impostores")
    if (cantidadimpostores < 1 || cantidadimpostores > cantjugadores - 2){
        alert("El numero de impostores debe ser al menos 1 y como maximo " + (cantjugadores -2))
    }
    return cantidadimpostores
}

//seleccion de categoria

function seleccionarcategoria () {
    let inputPaises = document.getElementById("Paises")
    let inputfutbolhistorico = document.getElementById("FutbolHistorico")
    let inputfutbolactual = document.getElementById("FutbolActual")
    let inputprofesiones = document.getElementById("Profesiones")
    let inputlugares = document.getElementById("Lugares")
    let inputsuperheroes = document.getElementById("Superheroes")
    let categoria = document.getElementById("categoria-seleccionada")


    if (inputPaises.checked) {
        categoria.innerHTML = "Paises"
        let palabrascategoria = 70
    } else if (inputfutbolhistorico.checked) {
        categoria.innerHTML = "Futbolistas históricos"
        let palabrascategoria = 30
    }   else if (inputfutbolactual.checked) {
        categoria.innerHTML = "Futbolistas actuales"
        let palabrascategoria = 50
    } else if (inputclubes.checked) {
        categoria.innerHTML = "Clubes"
        let palabrascategoria = 40
    }   else if (inputprofesiones.checked) {
        categoria.innerHTML = "Profesiones"
        let palabrascategoria = 50
    }   else if (inputlugares.checked) {
        categoria.innerHTML = "Lugares"
        let palabrascategoria = 40
    }   
}

//juego


function seleccionarpalabra() {
    let palabra = aleatorio(1,palabrascategoria)


}


function seleccionarimpostor() {
        let jugadorimpostor = aleatorio(1,cantjugadores)
        let impostor = document.getElementById("impostor")
        return impostor.innerHTML = "El impostor es el jugador " + jugadorimpostor


}
 //funciones basicas

function aleatorio(min, max) {
        return Math.floor( Math.random() * (max - min + 1)+ min )
}

window.addEventListener("load", iniciarJuego)