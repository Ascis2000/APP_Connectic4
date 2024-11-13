
function deleteAd(anuncioId) {
	// Coloca el ID del anuncio en el campo oculto del formulario
	
	const form = document.forms['deleteForm'];
	form.action = `/ads/delete/${anuncioId}`;

    // Envía el formulario
    form.submit();
}

