


// Función para mostrar el modal
function MO_Modal(modo) {
    
	if(modo == 'on'){
		document.getElementById("txtModal").innerHTML = '';
		document.getElementById("boxModal").style.display = 'flex';
	}
	else{
		document.getElementById("txtModal").innerHTML = '';
		document.getElementById("boxModal").style.display = 'none';
	}
    // Usamos innerHTML para permitir el uso de etiquetas HTML
    
};

function editAd(adId) {

	const myAd = document.getElementById(adId);

	// valores de la tarjeta DOM
	const title = myAd.querySelector('.title').innerHTML
	const subtitle = myAd.querySelector('.subtitle').innerHTML
	const urlWeb = myAd.querySelector('.urlWeb').href
	const description = myAd.querySelector('.description').innerHTML
	const imgSrc = myAd.querySelector('.imgSrc').src

	// valores del formulario
	document.querySelector('.modal #title').value = title;
	document.querySelector('.modal #subtitle').value = subtitle;
	document.querySelector('.modal #urlWeb').value = urlWeb;
	document.querySelector('.modal #description').value = description;
	document.querySelector('.modal #imgSrc').value = imgSrc;

	
	const btn_update = document.querySelector('#boxModal button.btn_update');

	// asignamos el evento onclick al boton dentro de la modal
	btn_update.addEventListener('click', function() {
		
		const datos = {
			title: document.querySelector('.modal #title').value,
			subtitle: document.querySelector('.modal #subtitle').value,
			urlWeb: document.querySelector('.modal #urlWeb').value,
			description: document.querySelector('.modal #description').value,
			imgSrc: document.querySelector('.modal #imgSrc').value,
		}
		updateAd(adId, datos);
	});

	MO_Modal('on');
}

function updateAd(adId, data){
	fetch(`/ads/update/${adId}`,{
		method:"PUT",
		headers: {
			'Content-Type': 'application/json',
		},
		body:JSON.stringify(data)
	})
	.then(response => {
		if (response.ok) {

			alert(`Anuncio con id: '${adId}', ha sido modificado.`);
			window.location.href="/admin/dashboard";

		} else {
			console.error('Error al eliminar el anuncio');
		}
	})
	.catch(error => {
		console.error('Hubo un problema con la solicitud Fetch:', error);
	});
}

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

// function addFavorites() {
// 	fetch('/api/addFavorite', {
// 	  method: 'POST',
// 	  headers: {
// 		'Content-Type': 'application/json',
// 	  },
// 	  body: JSON.stringify({ eventId: eventId }),
// 	})
// 	  .then(response => response.json())
// 	  .then(data => {
// 		if (data.success) {
// 		  alert('Evento añadido a favoritos exitosamente');
// 		} else {
// 		  alert('Error al añadir a favoritos');
// 		}
// 	  })
// 	  .catch(error => {
// 		console.error('Error:', error);
// 	  });
//   }
  
