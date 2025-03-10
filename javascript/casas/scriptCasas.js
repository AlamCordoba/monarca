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


//Funcion para la aparición del rectangulo amarillo inferior
document.addEventListener("DOMContentLoaded", function () {
    let yellowBox = document.getElementById("animatedBox");

    function handleScroll() {
        let boxPosition = yellowBox.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (boxPosition < screenHeight * 0.8) {
            yellowBox.classList.add("show");
            window.removeEventListener("scroll", handleScroll); // Para que solo se active una vez
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar una vez al cargar la página en caso de que ya sea visible
});

//Función para el funcionamiento del slider

document.addEventListener("DOMContentLoaded", function () {
    const sliderImages = document.querySelectorAll(".imgSlider");
    const buttons = document.querySelectorAll(".button");
    const imgContainer = document.querySelector(".imgContainer");
    const titleContainer = document.getElementById("infoTitle");
    const textContainer = document.getElementById("infoText");
    const textDiv = document.querySelector(".text-container");
    const slideContainer = document.querySelector(".slideContainer");
    
    let currentIndex = 0;
    let activeButton = null;

    buttons.forEach((button, index) => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtener el ancho del contenedor del slider y de cada imagen
            let containerWidth = slideContainer.clientWidth;
            let imageWidth = sliderImages[0].clientWidth;

            // Calcular el desplazamiento necesario para centrar la imagen
            let offset = (containerWidth / 2) - (imageWidth / 2) - (index * imageWidth);
            imgContainer.style.transform = `translateX(${offset}px)`;
            currentIndex = index;

            // Obtener y mostrar el texto asociado
            let parentDiv = button.parentElement;
            let titleElement = parentDiv.querySelector(".hidden-title");
            let textElement = parentDiv.querySelector(".hidden-text");
            
            if (titleElement && textElement) {
                titleContainer.textContent = titleElement.textContent;
                textContainer.textContent = textElement.textContent;
                textDiv.classList.add("show");
            }

            // Restaurar todas las imágenes a su tamaño y tono de grises
            sliderImages.forEach(img => {
                img.style.filter = "grayscale(100%)";
                img.style.transform = "scale(1)";
                img.style.transition = "transform 0.4s, filter 0.4s";
            });

            // Agrandar y restaurar el color de la imagen seleccionada
            let selectedImage = parentDiv.querySelector(".imgSlider");
            selectedImage.style.filter = "grayscale(0%)";
            selectedImage.style.transform = "scale(1.3)";

            // Manejar la transparencia del botón
            if (activeButton) {
                activeButton.classList.remove("transparent-button");
            }
            button.classList.add("transparent-button");
            activeButton = button;
        });
    });

    // Hacer el slider responsive con touch swipe (para móviles)
    let startX = 0;
    imgContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    imgContainer.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        let diff = startX - endX;

        if (diff > 50 && currentIndex < sliderImages.length - 1) {
            // Deslizar a la derecha (siguiente imagen)
            currentIndex++;
        } else if (diff < -50 && currentIndex > 0) {
            // Deslizar a la izquierda (imagen anterior)
            currentIndex--;
        }

        let containerWidth = slideContainer.clientWidth;
        let imageWidth = sliderImages[0].clientWidth;
        let offset = (containerWidth / 2) - (imageWidth / 2) - (currentIndex * imageWidth);
        imgContainer.style.transform = `translateX(${offset}px)`;
    });
});












