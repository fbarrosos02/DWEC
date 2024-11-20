const draggables = document.querySelectorAll(".draggable");
const dropzones = document.querySelectorAll(".dropzone");
const btncomprobar = document.getElementById("btncomprobar");

const correcto = {
  manzana: "frutas",
  perro: "animales",
  rojo: "colores",
  platano: "frutas",
  gato: "animales",
  azul: "colores",
  uva: "frutas",
  caballo: "animales",
  amarillo: "colores",
  kiwi: "frutas",
};

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
});
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const element = document.getElementById(data);
    event.target.appendChild(element);
  });
});

btncomprobar.addEventListener("click", () => {
  draggables.forEach((draggable) => {
    draggable.classList.remove("correcto", "erroneo");
    if (draggable.parentElement.classList.contains("dropzone")) {
      if (correcto[draggable.id] === draggable.parentElement.id) {
        draggable.classList.add("correcto");
      } else {
        draggable.classList.add("erroneo");
      }
    }
  });
});
