function mostrarMenuPrincipal() {
    console.log("---CRASHMANIA---");
    console.log("Menu principal");
    console.log("1- Jugar");
    console.log("2- Registrar un jugador");
    console.log("3- Crear tablero personalizado");
    console.log("4- Mostrar Ranking");
    console.log("5- Salir");
}

function pedirUnDato(mensaje) {
    const opcion = prompt(mensaje);
    actualizarPantalla();
    return opcion;
}

function mostrarError(mensaje) {
    actualizarPantalla();
    console.warn(mensaje);
}
