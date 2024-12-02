const productos = [
    {nombre: "Bicicleta", precio: 290, cantidad: 23},
    { nombre: "Patinete", precio: 150, cantidad: 15 },
    { nombre: "Coche", precio: 15000, cantidad: 5 },
    { nombre: "Motocicleta", precio: 7000, cantidad: 8 },
    { nombre: "Camión", precio: 25000, cantidad: 3 },
    { nombre: "Patinete eléctrico", precio: 350, cantidad: 12 },
    { nombre: "Furgoneta", precio: 18000, cantidad: 4 },
    { nombre: "Triciclo", precio: 450, cantidad: 10 },
    { nombre: "Cuatrimoto", precio: 12000, cantidad: 6 },
    { nombre: "Carro de golf", precio: 7000, cantidad: 2 }
];

// Uso de reduce para encontrar el producto con el precio más alto
const precioMax = productos.reduce((max, producto) => {
if (producto.precio > max.precio){
    return producto;
}
return max;
});
console.log(precioMax);

// Uso de find para buscar el producto cuyo nombre es "Coche"
const patinete = productos.find((producto) => {
if (producto.nombre === "Coche"){
    return producto;
}
});
console.log(patinete);

// Uso de every para verificar si todos los productos tienen una cantidad mayor a 10
const preciomayor10 = productos.every(obj => obj.cantidad > 10);
console.log(preciomayor10);