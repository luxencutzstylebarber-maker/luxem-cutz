function ingresar() {
  const bienvenida = document.getElementById("bienvenida");
  const contenido = document.getElementById("contenido");

  bienvenida.classList.add("oculto");
  contenido.classList.add("visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
