const jugadores = [];
const tableroPropio = null;

//Test
generarJugadoresDePrueba();

let opcion;
do {
    console.log(jugadores);

    mostrarMenuPrincipal();
    opcion = parseInt(pedirUnDato("Ingrese una opción:"));

    switch (opcion) {
        case 1:
            // Jugar
            break;
        case 2:
            registrarJugador();
            break;
        case 3:
            // Crear tablero
            break;
        case 4:
            // Mostrar ranking
            break;
        case 5:
            // Salir
            break;
        default:
            mostrarError("La opción ingresada no es válida");
            break;
    }
} while (opcion != 5);

function registrarJugador() {
    const nombre = pedirUnDato("Ingrese nombre del jugador:");
    const alias = pedirUnDato("Ingrese alias de " + nombre + ":");
    const edad = parseInt(pedirUnDato("Ingrese edad de " + alias + ":"));

    let estaRepetido = false;
    for (const jugador of jugadores) {
        if (jugador.alias === alias) {
            estaRepetido = true;
        }
    }

    if (estaRepetido) {
        mostrarError("El alias ingresado ya está en uso.");
    } else if (!nombre || !alias || !edad) {
        mostrarError("Algun valor ingresado no es válido.");
    } else {
        const nuevoJugador = new Jugador(nombre, alias, edad);
        jugadores.push(nuevoJugador);
    }
}

//Tests
function generarJugadoresDePrueba() {
    jugadores.push(
        new Jugador("prueba1", "alias1", 10),
        new Jugador("prueba2", "alias2", 50)
    );
}
