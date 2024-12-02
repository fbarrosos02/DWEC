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

// Funcion para agregar un nuevo producto a la lista
function agregarProducto(nombreProducto, precioProducto , cantidadProducto){
productos.push({nombre : nombreProducto, precio: precioProducto, cantidad: cantidadProducto });
}

// Funcion para eliminar un producto de la lista por nombre
function eliminarProducto(nombreProducto){
    const indice = productos.findIndex(producto => producto.nombre === nombreProducto);
    productos.splice(indice, 1);
}

// Función para buscar un producto por nombre y mostrarlo
function buscarProductos(nombreProducto){
    const productoEncontrado = productos.find(producto => producto.nombre === nombreProducto);
    console.log(productoEncontrado);
}

// Agregamos un nuevo producto Tren
agregarProducto("Tren", 1300000, 12);
console.log(productos);

// Eliminamos el producto Furgoneta
eliminarProducto("Furgoneta");
console.log(productos);

// Buscamos el producto Coche
buscarProductos("Coche");