const coloresPrimarios = ["Rojo", "Verde", "Blue"];
//Nuevo color en la segunda posicon del array
coloresPrimarios.splice(1, 0, "Morado");
console.log(coloresPrimarios);
//Nuevo array con las lso dos ulitmos colores del array 
const ColoresUltimos = coloresPrimarios.slice(2, 4);
console.log(ColoresUltimos);