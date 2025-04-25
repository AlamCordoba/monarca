var video = document.getElementById('video');
var BotonPlay =  documet.getElementById('boton-incio');

BotonPlay.addEventListener('click', function() {
    video.play().append('autoplay');
    BotonPlay.style.display = 'none';
    BotonPausa.style.display = 'inline'
    console.log("no se puede =(")
})