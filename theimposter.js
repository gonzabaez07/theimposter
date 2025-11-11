let palabrascategoria = ""

function iniciarJuego() {
    console.log("juego iniciado")
    let sectioninicio = document.getElementById("inicio")
    let sectionpreparacionJuego = document.getElementById("preparacion-juego")
    let sectionjuego = document.getElementById("juego")
    sectionjuego.style.display = "none"
    sectionpreparacionJuego.style.display = "none"
    let botonComenzar = document.getElementById("boton-comenzar")
    botonComenzar.addEventListener("click", configurarjuego)
    let botonIniciar = document.getElementById("boton-iniciar")
    botonIniciar.addEventListener("click", iniciarJuegoPosta)

}
function configurarjuego() {
    let sectioninicio = document.getElementById("inicio")
    let sectionpreparacionJuego = document.getElementById("preparacion-juego")
    sectionpreparacionJuego.style.display = "block"
    sectioninicio.style.display = "none"
 
}



//configuracion del juego


//cantidad de jugadores

let iniciarJuegoPosta = () => {
    let cantjugadores = seleccionarcantjugadores ()
    let cantidadimpostores = seleccionarcantimpostores (cantjugadores)
    let categoria = seleccionarcategoria ()
    console.log("Cantidad de jugadores: " + cantjugadores)
    console.log("Cantidad de impostores: " + cantidadimpostores)
    console.log("Categoria seleccionada: " + categoria)
}



function seleccionarcantjugadores (){
    let cantjugadores = document.getElementById("input-jugadores")
    if (cantjugadores < 3 || cantjugadores > 20){
        alert("El numero de jugadores debe ser entre 3 y 20")    
    } 
    return cantjugadores
}
//cantidad de impostores

function seleccionarcantimpostores (cantjugadores){
    let cantidadimpostores = document.getElementById("input-impostores")
    if (cantidadimpostores < 1 || cantidadimpostores > cantjugadores - 2){
        alert("El numero de impostores debe ser al menos 1 y como maximo " + cantjugadores - 2)
    }
    return cantidadimpostores
}

//seleccion de categoria

function seleccionarcategoria () {
    let inputPaises = document.getElementById("Paises")
    let inputFutbolistasHistoricos = document.getElementById("Futbolistashistoricos")
    let inputFutbolistasActuales = document.getElementById("Futbolistasactuales")
    let inputProfesiones = document.getElementById("Profesiones")
    let inputLugares = document.getElementById("Lugares")
    let inputClubes = document.getElementById("Clubes")
    let categoria = document.getElementById("categoria-seleccionada")
    if (inputPaises.checked){
        categoria.innerHTML = "Paises"
        palabrascategoria = 50
    } else if (inputFutbolistasHistoricos.checked){
        categoria.innerHTML = "Futbol Historico"
        palabrascategoria = 50
    } else if (inputFutbolistasActuales.checked){
        categoria.innerHTML = "Futbol Actual"
        palabrascategoria = 50
    }  else if (inputClubes.checked){  
        categoria.innerHTML = "Clubes"
        palabrascategoria = 50
    }  else if (inputLugares.checked){
        categoria.innerHTML = "Lugares"
        palabrascategoria = 50
    } else if (inputProfesiones.checked){
        categoria.innerHTML = "Profesiones"
        palabrascategoria = 50
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