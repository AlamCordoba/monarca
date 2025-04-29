//Animaciones de rectangulos amarillos en amenidades
document.addEventListener("DOMContentLoaded", function () {
    function initAnimation(className) {
        const elements = document.querySelectorAll(className);

        if (elements.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("expand");
                    }
                });
            }, { threshold: 0.5 }); 

            elements.forEach(element => observer.observe(element));
        } else {
            console.error(`Elementos con la clase ${className} no encontrados`);
        }

    }
    initAnimation(".rectangle");
    initAnimation(".cuadrado");
    initAnimation(".rombo");
    initAnimation(".amenidades-rentangulo");
    initAnimation(".proyecto-restangulo");
})
