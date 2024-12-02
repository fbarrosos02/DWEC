//Generacion del array 
const longitud = Math.floor(Math.random() * 100);
const arrayAleatorio = Array.from({length: longitud}, () => Math.floor(Math.random() * 100));

//Array en orden ascendiente
console.log(arrayAleatorio);
arrayAleatorio.sort((a, b) => b - a);
console.log(arrayAleatorio);

//Array Invertido
let arrayInvertido = arrayAleatorio.reverse();
console.log(arrayInvertido);