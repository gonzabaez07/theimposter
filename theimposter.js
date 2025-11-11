let palabrascategoria = "";
let cantjugadoresGlobal = 0; // ✅ Variable global para usar luego

function iniciarJuego() {
    console.log("juego iniciado");
    let sectioninicio = document.getElementById("inicio");
    let sectionpreparacionJuego = document.getElementById("preparacion-juego");
    let sectionjuego = document.getElementById("juego");
    sectionjuego.style.display = "none";
    sectionpreparacionJuego.style.display = "none";

    let botonComenzar = document.getElementById("boton-comenzar");
    botonComenzar.addEventListener("click", configurarjuego);

    let botonIniciar = document.getElementById("boton-iniciar");
    botonIniciar.addEventListener("click", iniciarJuegoPosta);
}

function configurarjuego() {
    let sectioninicio = document.getElementById("inicio");
    let sectionpreparacionJuego = document.getElementById("preparacion-juego");
    sectionpreparacionJuego.style.display = "block";
    sectioninicio.style.display = "none";
}

//configuracion del juego

let iniciarJuegoPosta = () => {
    let cantjugadores = seleccionarcantjugadores();
    let cantidadimpostores = seleccionarcantimpostores(cantjugadores);
    let categoria = seleccionarcategoria();

    console.log("Cantidad de jugadores: " + cantjugadores);
    console.log("Cantidad de impostores: " + cantidadimpostores);
    console.log("Categoria seleccionada: " + categoria);
}

function seleccionarcantjugadores() {
    let cantjugadores = parseInt(document.getElementById("input-jugadores").value); // ✅ Parsear valor
    if (cantjugadores < 3 || cantjugadores > 20 || isNaN(cantjugadores)) {
        alert("El numero de jugadores debe ser entre 3 y 20");
    }
    cantjugadoresGlobal = cantjugadores; // ✅ Guardar global
    return cantjugadores;
}

function seleccionarcantimpostores(cantjugadores) {
    let cantidadimpostores = parseInt(document.getElementById("input-impostores").value); // ✅ Parsear valor
    if (cantidadimpostores < 1 || cantidadimpostores > cantjugadores - 2 || isNaN(cantidadimpostores)) {
        alert("El numero de impostores debe ser al menos 1 y como maximo " + (cantjugadores - 2));
    }
    return cantidadimpostores;
}

let seleccionarcategoria = () => {
    let inputPaises = document.getElementById("Paises");
    let inputFutbolistasHistoricos = document.getElementById("Futbolistashistoricos");
    let inputFutbolistasActuales = document.getElementById("Futbolistasactuales");
    let inputProfesiones = document.getElementById("Profesiones");
    let inputLugares = document.getElementById("Lugares");
    let inputClubes = document.getElementById("Clubes");
    let spancategorias = document.getElementById("categorias");

    if (inputPaises.checked) {
        spancategorias.innerHTML = "Paises";
        palabrascategorias = 50;
        return "Paises";
    } else if (inputFutbolistasHistoricos.checked) {
        spancategorias.innerHTML = "Futbolistas Historicos";
        palabrascategorias = 50;
        return "Futbolistas Historicos";
    } else if (inputFutbolistasActuales.checked) {
        spancategorias.innerHTML = "Futbolistas Actuales";
        palabrascategorias = 50;
        return "Futbolistas Actuales";
    } else if (inputProfesiones.checked) {
        spancategorias.innerHTML = "Profesiones";
        palabrascategorias = 50;
        return "Profesiones";
    } else if (inputLugares.checked) {
        spancategorias.innerHTML = "Lugares";
        palabrascategorias = 50;
        return "Lugares";
    } else if (inputClubes.checked) {
        spancategorias.innerHTML = "Clubes";
        palabrascategorias = 50;
        return "Clubes";
    } else {
        alert("Selecciona una categoria para continuar");
    }
}
//juego

function seleccionarpalabra() {
    let palabra = aleatorio(1, palabrascategoria);
    return palabra;
}

function seleccionarimpostor() {
    let jugadorimpostor = aleatorio(1, cantjugadoresGlobal); // ✅ ahora funciona
    let impostor = document.getElementById("impostor");
    return impostor.innerHTML = "El impostor es el jugador " + jugadorimpostor;
}

//funciones basicas

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
