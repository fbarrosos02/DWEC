const botonpiedra = document.getElementById('piedra');
const botonpapel = document.getElementById('papel');
const botontijeras = document.getElementById('tijeras');
const mensaje = document.getElementById('mensaje');


let movimientos = ['🪨', '📄', '✂️'];

function generarMovimientoMaquina() {
    const RandomIndex = Math.floor(Math.random() * 3); 
    return movimientos[RandomIndex];
}
function generarmensaje(maquina) {
    const divmensaje = document.createElement('div');
    divmensaje.className = "mensaje";
    divmensaje.innerText = `${maquina}`;
    document.body.appendChild(divmensaje);
    
}
function victoria() {
    const victoria = document.createElement('div');
    victoria.className = "victoria";
    victoria.innerText = `GANASTE`;
    document.body.appendChild(victoria);
}
function empate() {
    const empate = document.createElement('div');
    empate.className = "empate";
    empate.innerText = `EMPATE`;
    document.body.appendChild(empate);
}
function derrota() {
    const derrota = document.createElement('div');
    derrota.className = "derrota";
    derrota.innerText = `PERDISTE`;
    document.body.appendChild(derrota);
}

botonpiedra.addEventListener('click', () => {
    const movmaq = generarMovimientoMaquina();  
    generarmensaje(movmaq);
    if (movmaq == '🪨'){
        empate();
    } else if (movmaq == '📄') {
        derrota();
    } else {
        victoria();
    }
});

botonpapel.addEventListener('click', () => {
    const movmaq = generarMovimientoMaquina();  
    generarmensaje(movmaq);
    if (movmaq == '📄'){
        empate();
    } else if (movmaq == '🪨') {
        victoria();
    } else {
        derrota();
    }
});

botontijeras.addEventListener('click', () => {
   const movmaq = generarMovimientoMaquina();  
   generarmensaje(movmaq);
   if (movmaq == '✂️'){
       empate();
   } else if (movmaq == '📄') {
       victoria();
   } else {
       derrota();
   }
});


