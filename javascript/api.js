async function mostrarImagenMascota() {
    const contenedorImagen = document.getElementById('contenedor-imagen');

    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=1');
        const data = await response.json();

        if (data.length > 0) {
            const mascota = data[0];
            const img = document.createElement('img');
            img.src = mascota.url;
            img.alt = 'Imagen de mascota';
            img.width = 300; 
            
            img.classList.add('img-mascota');
            // estilos de la imagen
            img.style.borderRadius = '15px';
            img.style.boxShadow = '0 4px 8px hsla(207, 46%, 41%, 0.831)';
            img.style.marginBottom = '15px';
            img.style.border = '5px solid hsla(207, 46%, 41%, 0.831)';

            // Agrega la imagen al contenedor
            if (contenedorImagen) {
                contenedorImagen.appendChild(img);
            } else {
                console.log("El contenedor de imagen no existe en el DOM");
            }
        }
    } catch (error) {
        console.log('Hay un error:', error);
    }
}

mostrarImagenMascota();