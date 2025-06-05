document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById('ham-btn');
    const links = document.getElementById('links-chest');


    icon.addEventListener("click", function() {
        if (links.style.display == "flex") {
            links.style.display = "none";
        } else {
            links.style.display = "flex"
        };
    });
});