document.addEventListener("DOMContentLoaded", () => {
    // Scroll Elements
    const inicio = document.getElementById('inicio-scrol');
    const inicioin = document.getElementById('introduction-in');

    const sobre = document.getElementById('sobre-scrol');
    const sobrein = document.getElementById('sobre-in');

    const personagem = document.getElementById('personagem-scrol');
    const personagemin = document.getElementById('personagem-in');

    const galeria = document.getElementById('galeria-scrol');
    const galeriain = document.getElementById('gallery-in');

    // Botão Hamburguer
    const icon = document.getElementById('ham-btn');
    const navLinks = document.getElementById("nav-links");

    if (icon && navLinks) {
        icon.addEventListener("click", function () {
            icon.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Scroll into view com verificações
    if (inicio && inicioin) {
        inicio.addEventListener("click", function() {
            inicioin.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (sobre && sobrein) {
        sobre.addEventListener("click", function() {
            sobrein.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (personagem && personagemin) {
        personagem.addEventListener("click", function() {
            personagemin.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (galeria && galeriain) {
        galeria.addEventListener("click", function() {
            galeriain.scrollIntoView({ behavior: "smooth" });
        });
    }
});
