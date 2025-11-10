//funciones basicas
function aleatorio(min, max) {
        return Math.floor( Math.random() * (max - min + 1)+ min )
}


//configuracion del juego

//cantidad de jugadores

let cantjugadores = seleccionarcantjugadores ()
function seleccionarcantjugadores (){
    let cantjugadores = prompt("¿Cuántos jugadores van a jugar? (minimo 3, maximo 20)")
    return cantjugadores
} if (cantjugadores < 3 || cantjugadores > 20) {
        alert("Cantidad de jugadores no valida")
        seleccionarcantjugadores() 
}

//cantidad de impostores
let cantidadimpostores = seleccionarcantimpostores ()
function seleccionarcantimpostores (){
    let cantidadimpostores = prompt("¿Cuántos impostores habrá? (minimo 1, maximo " + (cantjugadores -2) + ")")
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
    } else if (inputfutbolhistorico.checked) { 
        categoria.innerHTML = "Futbol Historico"
    }   else if (inputfutbolactual.checked) {
        categoria.innerHTML = "Futbol Actual"
    }
}

//juego

function seleccionarimpostor() {
        let jugadorimpostor = aleatorio(1,cantjugadores)
        let impostor = document.getElementById("impostor")
        return impostor.innerHTML = "El impostor es el jugador " + jugadorimpostor

}