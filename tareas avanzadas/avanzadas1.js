const calificaciones = [
    ["Juan", 8, 6, 8, 6, 8],
    ["Natalia", 6, 6, 6, 5, 7],
    ["Alex", 4, 9, 7, 8, 4],
    ["Maria", 8, 4, 2, 7, 10]
];
console.log(calificaciones);
// Cambiar la calificación de Alex en la tercera materia (índice 2)
calificaciones[2][2] = 1;
console.log(calificaciones);

// Aplanar el array bidimensional a un array unidimensional
const calificacionesPlano = calificaciones.flat();
console.log(calificacionesPlano);
