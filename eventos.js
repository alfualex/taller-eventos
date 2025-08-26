function saludar(e) {
    e.stopPropagation();
    alert("Hola!");
}

const boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    alert("Hola! Soy el div");
})