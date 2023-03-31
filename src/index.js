"user strict"

/*Seleccionamos los nodos de nuestro HTML, con Javascript*/
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close-modal")
const btnOpen = document.querySelector(".show-modal")

/*Creamos las funciones que contienen la lógica*/
function openModal() {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    return
}

function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
    return
}

/*Activamos los eventos de click */
btnOpen.addEventListener("click", openModal)
btnClose.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

/* Cerrar el modal, presionando la tecla escape */
document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        closeModal()
    }
})