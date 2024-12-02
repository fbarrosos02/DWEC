const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Numeros pares
const pares = numeros.filter(num => num %2 === 0);
console.log(pares);

//Numeros duplicados
const duplicados = numeros.map(num => num * 2);
console.log(duplicados);

//Suma de los numeros
const suma = numeros.reduce((acc, num) => acc + num, 0); 
console.log(suma);
