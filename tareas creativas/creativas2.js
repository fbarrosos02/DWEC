const carritoCompra = [
    { nombre: "Smartphone", precio: 800, cantidad: 2 },
    { nombre: "Reloj inteligente", precio: 180, cantidad: 1 },
    { nombre: "Impresora", precio: 200, cantidad: 2 }
];

// Calcular el precio total del carrito multiplicando el precio por la cantidad de cada producto
const precioTotal = carritoCompra.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
console.log(precioTotal);

// Filtrar los productos que tienen más de 1 unidad
const productosFiltrados = carritoCompra.filter(producto => producto.cantidad > 1);
console.log(productosFiltrados);
