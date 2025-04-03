const hamburguesa = document.getElementById('hamburgesa');
const enlaces = document.getElementById('lista_enlaces');
hamburguesa.addEventListener('click' , function() {
    enlaces.classList.toggle('show');
})