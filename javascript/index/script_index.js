function playPause(btn, vidId) {
	var vid = document.getElementById(vidId);

	// Agrega este bloque una sola vez para evitar múltiples registros del evento
	if (!vid.hasAttribute('data-ended-listener')) {
		vid.addEventListener('ended', function() {
			console.log("El video ha terminado");
			vid.currentTime = 0;
			btn.innerHTML = "Conoce Monarca";
			btn.style.display = "block";
		});
		vid.setAttribute('data-ended-listener', 'true'); // Para no volver a añadir el evento
	}

	if (vid.paused) {
		vid.play();
		btn.innerHTML = "Pause";
		btn.style.display = "none";
	} else {
		vid.pause();
		btn.innerHTML = "Conoce Monarca";
		btn.style.display = "block";
	}
}