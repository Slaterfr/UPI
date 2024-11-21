document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-menu a");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                // Desplazamiento suave hacia la sección
                target.scrollIntoView({ behavior: "smooth" });

                // Cambiar la URL sin recargar la página
                history.pushState(null, "", targetId);
            }
        });
    });

    // Manejar el botón de retroceso del navegador
    window.addEventListener("popstate", () => {
        const sectionId = window.location.hash;
        const section = document.querySelector(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Interactividad del menú desplegable (opcional para navegadores sin hover)
document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", () => {
            const menu = dropdown.querySelector(".dropdown-menu");
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });
});

