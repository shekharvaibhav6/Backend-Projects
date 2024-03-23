const galleryElement = document.querySelector('.gallery');

fetch('/api/images')
    .then(response => response.json())
    .then(images => {
        images.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            galleryElement.appendChild(imgElement);
        });
    })
    .catch(error => {
        console.error('Error fetching images:', error);
    });
