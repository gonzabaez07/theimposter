//funciones basicas
function aleatorio(min, max) {
        return Math.floor( Math.random() * (max - min + 1)+ min )
}


//configuracion del juego

//cantidad de jugadores

let cantjugadores = seleccionarcantjugadores ()
function seleccionarcantjugadores (){
    let cantjugadores = input-jugadores.value
    return cantjugadores
} if (cantjugadores < 3 || cantjugadores > 20) {
        alert("Cantidad de jugadores no valida")
        seleccionarcantjugadores() 
}

//cantidad de impostores
let cantidadimpostores = seleccionarcantimpostores ()
function seleccionarcantimpostores (){
    let cantidadimpostores = input-impostores.value
    return cantidadimpostores
}
    if (cantidadimpostores < 1 || cantidadimpostores > (cantjugadores -2)) {
        alert("Cantidad de impostores no valida")
        seleccionarcantimpostores() 
    }


//seleccion de categoria

function seleccionarcategoria (){
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
        categoria.innerHTML = "Futbol Historico"
        let palabrascategoria = 30
    }   else if (inputfutbolactual.checked) {
        categoria.innerHTML = "Futbol Actual"
        let palabrascategoria = 50
    }   else if (inputprofesiones.checked) {
        categoria.innerHTML = "Profesiones"
        let palabrascategoria = 50
    }   else if (inputlugares.checked) {
        categoria.innerHTML = "Lugares"
        let palabrascategoria = 40
    }   else if (inputsuperheroes.checked) {
        categoria.innerHTML = "Superheroes"
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