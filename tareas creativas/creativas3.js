const arrayAnidado = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

// flat para aplanar el array anidado
const planoFlat = arrayAnidado.flat();
console.log(planoFlat);

// Usando flatMap para aplanar el array anidado
const planoFlatMap = arrayAnidado.flatMap(num => num);
console.log(planoFlatMap);