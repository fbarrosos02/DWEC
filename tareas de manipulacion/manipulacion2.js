const nombres = ["Marta", "Máximo"];
const edades = [37, 13];

//Nuevo array concatenando nombres y edades
const concatenando = nombres.concat(edades);
console.log(concatenando);

//nueva string separando el anterior array con comas
const resultadoFinal = concatenando.join(", ");
console.log(resultadoFinal);