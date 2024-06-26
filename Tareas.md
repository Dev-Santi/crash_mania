---- Caracteristicas del juego:

-   2 jugadores
-   Tablero 5*5 6*6 7\*7
-   Registrar un jugador
-   Configurar tablero propio

    -   Indicar lado
    -   Indicar cantidad de Autos
    -   Indicar fila col y dir para cada auto
    -   Formato de ingreso de datos ("A12")
    -   Verificar que el tablero sea valido

-   Jugar:
    -   El usuario elige 2 jugadores
    -   El tipo de tablero
    -   Los jugadores indican la jugada ("A3")("b2")
    -   o indican:
        -   S: Mostrar lista de autos que pueden chocar (fila y columna) se mantiene el turno y se le resta 1 punto
        -   X: Surrender (cagon)
        -   R: Rotar el tablero
-   Ranking:
    -   Tabla ordenada por puntaje total y por alias

---- Gameplay:

-   Final de juego cuando no hay movimientos posibles o queda solo 1 auto.
-   Perdedor el que se queda sin movimientos
-   Informar por que se termino el juego
-   Ganar: +10
-   Perder: -2
-   Abandonar: -5

----- Durante un turno:

-   Seleccionar un auto.
-   El auto seleccionado debe poder chocar en sus otros 3 lados
-   El auto choca en el primero que encuentra.
-   El auto gira en su mismo eje

---- Jugadores:

-   Nombre
-   Edad
-   Alias

----- Autos:

-   Color
-   Direccion
-   Los faros deben ser amarillos
-   Solo giran hacia la derecha

----- Tablero:

-   Hay 3 tipos de tablero:
    -   Tablero al azar (pide tamaño, pide autos 5 y 12)
    -   Tablero propio
    -   Tablero predefinido (el de la foto)
