const entradatexto = document.getElementById('entradatexto');
const btnenviar = document.getElementById('btnenviar');
const dropzones = document.querySelectorAll('.dropzone');
const pendiente = document.getElementById('pendiente');
let index = 0;

// Generar tareas 
btnenviar.addEventListener('click', () => {
    const textoTarea = entradatexto.value.trim();
    // Control de entrada
    if (textoTarea === '') {
        alert('Por favor, escribe una tarea');
        return;
    }

    const tarea = document.createElement('div');
    const id = `tarea-${index++}`;
    tarea.setAttribute('id', id);
    tarea.setAttribute('draggable', 'true');
    tarea.classList.add('draggable');
    tarea.innerText = textoTarea;

    // Boton eliminar
    const eliminar = document.createElement('button');
    eliminar.innerText = "🗑️";
    tarea.appendChild(eliminar);
    eliminar.addEventListener('click', () => {
        tarea.remove();
    });

    // Boton modificar
    const modificar = document.createElement('button');
    modificar.innerText = "✏️";
    tarea.appendChild(modificar);
    modificar.addEventListener('click', () => {
        let nuevonombre = prompt("Indica el nuevo nombre: ");
        tarea.innerText = nuevonombre;
        tarea.appendChild(modificar);
        tarea.appendChild(eliminar);
    });
    // Funcionalidad de arrastre
    tarea.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    pendiente.appendChild(tarea);
    entradatexto.value = '';
});

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();

        const id = event.dataTransfer.getData('text');
        const elemento = document.getElementById(id);
        if (elemento) {
            event.target.appendChild(elemento);
        }
    });
});

// Modos
const btnclaro = document.getElementById('claro');
const btnoscuro = document.getElementById('oscuro');
const btnpastel = document.getElementById('pastel');
const bodyc = document.body;

// Boton modo Oscuro
btnoscuro.addEventListener('click', () => {
    bodyc.classList.remove('pastel');
    bodyc.classList.add('oscuro');
});
// Boton modo pastel
btnpastel.addEventListener('click', () => {
    bodyc.classList.remove('oscuro');
    bodyc.classList.add('pastel');
});

// Boton modo claro
btnclaro.addEventListener('click', () => {
    bodyc.classList.remove('pastel', 'oscuro');
});