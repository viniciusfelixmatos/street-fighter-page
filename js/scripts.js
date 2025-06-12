document.addEventListener("DOMContentLoaded", () => {

    /* Scroll into view */
    const inicio = document.getElementById('inicio-scrol');
    const inicioin = document.getElementById('introduction-in');

    const sobre = document.getElementById('sobre-scrol');
    const sobrein = document.getElementById('sobre-in');

    const personagem = document.getElementById('personagens-scrol')
    const personagemin = document.getElementById('personagem-in')

    const galeria = document.getElementById('galeria-scrol');
    const galeriain = document.getElementById('gallery-in');

    /* Button Hamburguer */ 
    const icon = document.getElementById('ham-btn');
    const links = document.getElementById('links-chest');


    icon.addEventListener("click", function() {
        if (links.style.display == "flex") {
            links.style.display = "none";
        } else {
            links.style.display = "flex"
        };
    });

    /* Scroll into view código */

    inicio.addEventListener("click", function() {
        inicioin.scrollIntoView({behavior: "smooth"});
    });

    sobre.addEventListener("click", function(){
        sobrein.scrollIntoView({behavior: "smooth"});
    });

    personagem.addEventListener("click", function() {
        personagemin.scrollIntoView({behavior: "smooth"});
    })

    galeria.addEventListener("click", function() {
        galeriain.scrollIntoView({behavior: "smooth"});
    });

});