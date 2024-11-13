
function deleteAd_0(anuncioId) {
	// Coloca el ID del anuncio en el campo oculto del formulario
	
	const form = document.forms['deleteForm'];
	form.action = `/ads/delete/${anuncioId}`;

    // Envía el formulario
    form.submit();
}

function deleteAd(adId) {

	fetch(`/ads/delete/${adId}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then(response => {
		if (response.ok) {
			console.log(`Anuncio con id ${adId} eliminado.`);
			// Aquí puedes hacer algo después de eliminar el anuncio, por ejemplo, actualizar la UI.
			// Llamar a una función para actualizar la lista de anuncios, por ejemplo.
		} else {
			console.error('Error al eliminar el anuncio');
		}
	})
	.catch(error => {
		console.error('Hubo un problema con la solicitud Fetch:', error);
	});
}
