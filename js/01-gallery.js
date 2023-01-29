import { galleryItems } from './gallery-items.js';
// Change code below this line

// gallery creation
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    gallery.insertAdjacentHTML('beforeend', `
        <div class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview}
                    data-source=${item.original}
                    alt=${item.description}
                />
            </a>
        </div>
    `);
});

// fullsize image showing
let image;

gallery.addEventListener('click', event => {
    event.preventDefault();

    image = basicLightbox.create(`
		<img width="1400" height="900" src=${event.target.dataset.source}>
	`);
    image.show();

    document.addEventListener('keydown', handleEsc);
});

function handleEsc(event) {
    if (event.code === 'Escape') {
        image.close();
        document.removeEventListener('keydown', handleEsc);
    }
}

// maybe code for the testing
console.log(galleryItems);
