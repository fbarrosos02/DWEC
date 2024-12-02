const texto = "La programación en JavaScript es muy interesante. La programación es realmente interesante, sobre todo en JavaScript. JavaScript hace que la programación sea fascinante. La programación en JavaScript es una de las mejores formas de aprender a programar.";
const palabras = texto.toLowerCase().split(' ');

const palabrasUnicas = palabras.reduce((acc, palabra) => {
  palabra = palabra.replace(/[.,]/g, '');
  if (!acc.includes(palabra)) {
    acc.push(palabra);
  }
  return acc;
},
 []);

console.log("Cantidad de palabras unicas:", palabrasUnicas.length);
console.log("Palabras unicas:", palabrasUnicas);
