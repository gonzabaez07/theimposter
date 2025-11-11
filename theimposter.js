let palabrascategoria = "";
let cantjugadoresGlobal = 0; // ✅ Variable global para usar luego
let categoriaelegida = "";
let reiniciarJuego = () => {
    location.reload()
}
function iniciarJuego() {
    console.log("juego iniciado");
    let sectionpreparacionJuego = document.getElementById("preparacion-juego");
    let sectionjuego = document.getElementById("juego");
    sectionjuego.style.display = "none";
    sectionpreparacionJuego.style.display = "none";
    let sectionfinalJuego = document.getElementById("final-juego");
    sectionfinalJuego.style.display = "none";

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

    

    let sectionpreparacionJuego = document.getElementById("preparacion-juego");
    sectionpreparacionJuego.style.display = "none";
    let sectionjuego = document.getElementById("juego");
    sectionjuego.style.display = "block";
    juego(); 
}

function seleccionarcantjugadores() {
    let cantjugadores = parseInt(document.getElementById("input-jugadores").value); // ✅ Parsear valor
    if (cantjugadores < 3 || cantjugadores > 20 || isNaN(cantjugadores)) {
        alert("El numero de jugadores debe ser entre 3 y 20");
        reiniciarJuego();
    }
    cantjugadoresGlobal = cantjugadores; // ✅ Guardar global
    return cantjugadores;
}

function seleccionarcantimpostores(cantjugadores) {
    let cantidadimpostores = parseInt(document.getElementById("input-impostores").value); // ✅ Parsear valor
    if (cantidadimpostores < 1 || cantidadimpostores > cantjugadores - 2 || isNaN(cantidadimpostores)) {
        alert("El numero de impostores debe ser al menos 1 y como maximo " + (cantjugadores - 2));
        reiniciarJuego();
    }
    return cantidadimpostores;
}

let seleccionarcategoria = () => {
    let inputPaises = document.getElementById("Paises");
    let inputFutbolistashistoricos = document.getElementById("Futbolistashistoricos");
    let inputFutbolistasactuales = document.getElementById("Futbolistasactuales");
    let inputClubes = document.getElementById("Clubes");
    let inputLugares = document.getElementById("Lugares");
    let inputProfesiones = document.getElementById("Profesiones");

    if (inputPaises.checked) 
        { categoriaelegida = "Paises"; palabrascategoria = 70;
    } else if (inputFutbolistashistoricos.checked) 
        { categoriaelegida = "Futbolistashistoricos"; palabrascategoria = 50;
    } else if (inputFutbolistasactuales.checked) 
        { categoriaelegida = "Futbolistasactuales"; palabrascategoria = 50;
    } else if (inputClubes.checked) 
        { categoriaelegida = "Clubes"; palabrascategoria = 50;
    } else if (inputLugares.checked) 
        { categoriaelegida = "Lugares"; palabrascategoria = 50;
    } else if (inputProfesiones.checked) 
        { categoriaelegida = "Profesiones"; palabrascategoria = 50;
    } else {
        alert("Selecciona una categoria");
        reiniciarJuego();
    }
    return categoriaelegida;
}

//juego
    
function juego() {
    

    function seleccionarpalabra() {
        let palabra = aleatorio(1, palabrascategoria);
        return palabra;
    }
    function seleccionarimpostores() {
    let cantidadimpostores = parseInt(document.getElementById("input-impostores").value);
    let impostores = [];

    while (impostores.length < cantidadimpostores) {
        let candidato = aleatorio(1, cantjugadoresGlobal);
        if (!impostores.includes(candidato)) {
            impostores.push(candidato);
        }
    }

    return impostores; // devuelve lista
}

    let botonAsignarRol = document.getElementById("asignar-rol");
    botonAsignarRol.addEventListener("click", rolesjugadores);
    
    function rolesjugadores() {
let palabra = seleccionarpalabra();
let impostores = seleccionarimpostores();

   let jugadoractual = 1;
    while (jugadoractual <= cantjugadoresGlobal) {
        if (impostores.includes(jugadoractual)) {

            alert("Jugador " + jugadoractual + ": Eres el impostor");
        } else {
            alert("Jugador " + jugadoractual + ": Tu palabra es: " + palabra);
        }
        jugadoractual++;
    }
}
}


//funciones basicas

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
