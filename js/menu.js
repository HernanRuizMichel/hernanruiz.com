
const abrirMenu = document.querySelector(".abrir-menu");
const cerrarMenu = document.querySelector(".cerrar-menu");

abrirMenu.addEventListener("click", ()=>{
    console.log("click")
    document.querySelector(".menu-hamburguesa").classList.add("mostrar--menu");
})

cerrarMenu.addEventListener("click", (e)=>{
    document.querySelector(".menu-hamburguesa").classList.remove("mostrar--menu");
})