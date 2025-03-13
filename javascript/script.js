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

document.addEventListener("DOMContentLoaded", function () {
    const rectangle = document.querySelector(".cuadrado");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rectangle.classList.add("expand");
            } 
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% del rectángulo es visible

    observer.observe(rectangle);
});

document.addEventListener("DOMContentLoaded", function () {
    const rectangle = document.querySelector(".rombo");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                rectangle.classList.add("expand");
            } 
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% del rectángulo es visible

    observer.observe(rectangle);
});