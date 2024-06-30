class Jugador {
    nombre;
    alias;
    edad;
    partidasJugadas;
    partidasGanadas;
    partidasPerdidas;
    partidasAbandonadas;
    puntaje;

    constructor(nombre, alias, edad) {
        this.nombre = nombre;
        this.alias = alias;
        this.edad = edad;
        this.partidasJugadas = 0;
        this.partidasGanadas = 0;
        this.partidasPerdidas = 0;
        this.partidasAbandonadas = 0;
        this.puntaje = 0;
    }

    añadirPartidaJugada() {
        this.partidasJugadas++;
    }

    añadirPartidaGanada() {
        this.partidasGanadas++;
    }

    añadirPartidaPerdida() {
        this.partidasPerdidas++;
    }

    añadirPartidaAbandonada() {
        this.partidasAbandonadas++;
    }

    añadirPuntaje(cantidad) {
        this.puntaje += cantidad;
    }
}
