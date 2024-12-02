const numeros = [];
// Mientras la longitud del array sea menor que un número aleatorio entre 1 y 100
while (numeros.length < Math.floor(Math.random() * 100)) { 
    // Generar un número aleatorio entre 1 y 100
  const numAleatorio = Math.floor(Math.random() * 100) + 1;
  if (!numeros.includes(numAleatorio)) {
    numeros.push(numAleatorio);
  }
}
console.log(numeros);
