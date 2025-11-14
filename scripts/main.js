// Efecto de navbar al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// MINIATURAS Y ACTIVACIÓN VISUAL
const thumbs = document.querySelectorAll(".thumb-img");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {

    // Quitar selección previa
    thumbs.forEach(t => t.classList.remove("active-thumb"));

    // Activar miniatura clickeada
    thumb.classList.add("active-thumb");
  });
});

const mensajes = {
    tension: "Te escuchamos. Vamos a ayudarte a liberar esa tensión y volver al equilibrio.",
    renovacion: "Perfecto. Prepararemos una experiencia pensada para revitalizarte por completo.",
    calma: "Gracias por compartirlo. Te guiamos a encontrar esa calma que estás buscando."
};

document.querySelectorAll(".ritual-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const estado = btn.getAttribute("data-state");
        const mensaje = mensajes[estado];
        document.getElementById("ritualMensaje").textContent = mensaje;

        // Resaltar CTA al seleccionar
        const cta = document.querySelector(".ritual-cta");
        cta.classList.add("highlight");

        setTimeout(() => cta.classList.remove("highlight"), 1200);
    });
});
