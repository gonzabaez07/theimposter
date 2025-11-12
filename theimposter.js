let opcionesCategorias = [];
let palabrascategoria = "";
let cantjugadoresGlobal = 0;
let categoriaelegida = "";
let impostoresGlobal = [];
let palabraGlobal = "";

// Reiniciar todo
let reiniciarJuego = () => location.reload();

function iniciarJuego() {
    console.log("Juego iniciado");

    document.getElementById("preparacion-juego").style.display = "none";
    document.getElementById("juego").style.display = "none";
    document.getElementById("final-juego").style.display = "none";

    document.getElementById("boton-comenzar").addEventListener("click", configurarjuego);
    document.getElementById("boton-iniciar").addEventListener("click", iniciarJuegoPosta);

    document.getElementById("descubrir-impostor").addEventListener("click", revelarImpostores);
    document.getElementById("boton-inicio").addEventListener("click", reiniciarJuego);
    document.getElementById("boton-volver").addEventListener("click", volverAJugar);
}

function configurarjuego() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("preparacion-juego").style.display = "block";
}

// Inicio del juego
let iniciarJuegoPosta = () => {
    let cantjugadores = seleccionarcantjugadores();
    let cantidadimpostores = seleccionarcantimpostores(cantjugadores);
    let categoria = seleccionarcategoria();

    console.log("Jugadores:", cantjugadores);
    console.log("Impostores:", cantidadimpostores);
    console.log("Categoría:", categoria);

    document.getElementById("preparacion-juego").style.display = "none";
    document.getElementById("juego").style.display = "block";

    juego();
};

function seleccionarcantjugadores() {
    let cantjugadores = parseInt(document.getElementById("input-jugadores").value);
    if (cantjugadores < 3 || cantjugadores > 20 || isNaN(cantjugadores)) {
        alert("El número de jugadores debe ser entre 3 y 20");
        reiniciarJuego();
    }
    cantjugadoresGlobal = cantjugadores;
    return cantjugadores;
}

function seleccionarcantimpostores(cantjugadores) {
    let cantidadimpostores = parseInt(document.getElementById("input-impostores").value);
    if (cantidadimpostores < 1 || cantidadimpostores > cantjugadores - 2 || isNaN(cantidadimpostores)) {
        alert("El número de impostores debe ser al menos 1 y como máximo " + (cantjugadores - 2));
        reiniciarJuego();
    }
    return cantidadimpostores;
}

let seleccionarcategoria = () => {
    let inputs = {
        Paises: paises,
        Futbolistashistoricos: futbolH,
        Futbolistasactuales: futbolA,
        Clubes: clubes,
        Lugares: lugares,
        Profesiones: profesiones,
        Clashroyale: clashroyale,
    };

    for (let id in inputs) {
        let input = document.getElementById(id);
        if (input.checked) {
            categoriaelegida = id;
            opcionesCategorias = inputs[id];
            palabrascategoria = opcionesCategorias.length;
            return categoriaelegida;
        }
    }

    alert("Selecciona una categoría");
    reiniciarJuego();
};

// Lógica del juego
function juego() {
    function seleccionarpalabra() {
        let palabra = aleatorio(1, palabrascategoria);
        palabraGlobal = opcionesCategorias[palabra - 1];
        return palabraGlobal;
    }

    function seleccionarimpostores() {
        let cantidadimpostores = parseInt(document.getElementById("input-impostores").value);
        let impostores = [];
        while (impostores.length < cantidadimpostores) {
            let candidato = aleatorio(1, cantjugadoresGlobal);
            if (!impostores.includes(candidato)) impostores.push(candidato);
        }
        impostoresGlobal = impostores;
        return impostores;
    }

    // Mostrar roles
    function rolesjugadores() {
        let mostrandorol = false;
        let palabra = seleccionarpalabra();
        let impostores = seleccionarimpostores();
        let jugadoractual = 1;

        const card = document.getElementById("tarjetas-jugadores");
        const front = document.getElementById("datos-jugadores-front");
        const back = document.getElementById("datos-jugadores-back");
        const cardInner = document.getElementById("card-inner");

        card.replaceWith(card.cloneNode(true));
        const nuevaCard = document.getElementById("tarjetas-jugadores");

        function cambiartarjeta() {
            mostrandorol = !mostrandorol;
            if (!mostrandorol) jugadoractual++;

            if (jugadoractual > cantjugadoresGlobal) {
                document.getElementById("juego").style.display = "none";
                document.getElementById("final-juego").style.display = "block";
                return;
            }

            if (mostrandorol) {
                let rol = impostores.includes(jugadoractual)
                ? "Eres el impostor 😈"
                : "Tu palabra es: " + palabra;

                document.getElementById("datos-jugadores-back").textContent = rol;
                document.getElementById("card-inner").className = "card-inner rotated";

                document.body.classList.remove("flash-role");
                void document.body.offsetWidth;
                document.body.classList.add("flash-role");

            } else {
                document.getElementById("datos-jugadores-front").textContent = `Jugador ${jugadoractual}`;
                document.getElementById("card-inner").className = "card-inner";
                document.body.classList.remove("flash-role");
            }
        }

        document.getElementById("datos-jugadores-front").textContent = `Jugador ${jugadoractual}`;
        nuevaCard.addEventListener("click", cambiartarjeta);
    }

    rolesjugadores();
}

// Mostrar impostores
function revelarImpostores() {
    if (impostoresGlobal.length === 0) {
        alert("Todavía no se han asignado impostores.");
    } else {
        alert("Los impostores son los jugadores: " + impostoresGlobal.join(", "));
    }
}

// Volver a jugar
function volverAJugar() {
    impostoresGlobal = [];
    palabraGlobal = "";
    cantjugadoresGlobal = 0;
    opcionesCategorias = [];
    palabrascategoria = "";
    categoriaelegida = "";

    document.getElementById("final-juego").style.display = "none";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "none";
    document.getElementById("preparacion-juego").style.display = "block";

    document.getElementById("datos-jugadores-front").textContent = "";
    document.getElementById("datos-jugadores-back").textContent = "";
    document.getElementById("card-inner").className = "card-inner";
}

// Aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
