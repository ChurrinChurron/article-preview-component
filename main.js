const flecha = document.querySelector("#social");
const redes = document.querySelector(".box-text-woman-share-social-media");
const flechaActivo = document.querySelector("#social-active");

flecha.addEventListener("click", () => {

	redes.classList.toggle("flexy");

});

flechaActivo.addEventListener("click", () => {

	redes.classList.remove("flexy");
});