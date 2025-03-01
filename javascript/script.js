//const rectangulo = document.querySelector('.rectangulo-expandible');
//const contenido = document.querySelector('.rectangulo-expandible .contenido');

//const observer = new IntersectionObserver(entries => {
    //entries.forEach(entry => {
        //if (entry.isIntersecting) {
            // El rectángulo es visible
           // rectangulo.classList.add('rectangulo-expandido');
           // contenido.style.opacity = '1';
        //} else {
            // El rectángulo no es visible
            //rectangulo.classList.remove('rectangulo-expandido');
            //contenido.style.opacity = '0';
        //}
    //});
//}, { threshold: 1 }); // threshold: 1 significa que el elemento debe ser 100% visible

//observer.observe(rectangulo);

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