//Función para la animación del rectangulo amarillo
document.addEventListener("DOMContentLoaded", function () {
    const rectangle = document.querySelector(".rectangle");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rectangle.classList.add("expand");
            } 
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% del rectángulo es visible

    observer.observe(rectangle);
});

//Función para la aparicion de texto del slider
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function(event) {

        let parentDiv = this.parentElement;
        let titleElement = parentDiv.querySelector('.hidden-title'); 
        let textElement = parentDiv.querySelector('.hidden-text'); 
        let titleContainer = document.getElementById("infoTitle");
        let textContainer = document.getElementById("infoText");
        let textDiv = document.querySelector(".text-container");

        if (titleElement && textElement) {
            titleContainer.textContent = titleElement.textContent;
            textContainer.textContent = textElement.textContent;
            textDiv.classList.add("show");
        }
    });
});

//Funcion para la aparición del rectangulo amarillo inferior









