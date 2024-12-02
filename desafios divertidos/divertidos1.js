const palabras = ["hola", "esto", "es", "javascript"];

// Usamos reduce para encontrar la palabra más larga
const palabraMasLarga = palabras.reduce((acc, palabra) => {
    if (palabra.length > acc.length) {
      acc = palabra;
    }
    return acc;
  }, "");
  console.log(palabraMasLarga);