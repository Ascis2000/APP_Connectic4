
function deleteAd(adId) {

	const confirmation = window.confirm(
		"Se va a proceder a borrar el Anuncio con id:\n '" + adId + "'\nEsta acción no se puede deshacer."
	);
    
    if (confirmation) {
        fetch(`/ads/delete/${adId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(response => {
			if (response.ok) {
				alert(`Anuncio con id: '${adId}', ha sido eliminado.`);
				window.location.href="/admin/dashboard";

			} else {
				console.error('Error al eliminar el anuncio');
			}
		})
		.catch(error => {
			console.error('Hubo un problema con la solicitud Fetch:', error);
		});
    } else {
        console.log("Eliminación cancelada.");
    }

	
}
