const comidasFavoritas = [];
//Añadir dos comidas al principio y al final del array
comidasFavoritas.push("Pizza", "Hamburguesa");
comidasFavoritas.unshift("Pasta", "Patatas Fritas");
console.log(comidasFavoritas);

//Eliminar primra y ultima comida del array
comidasFavoritas.pop();
comidasFavoritas.shift();
console.log(comidasFavoritas);

//Posicion de "Pizza" en el array
console.log(comidasFavoritas.indexOf("Pizza"));

