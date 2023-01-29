import { galleryItems } from './gallery-items.js';
// Change code below this line

// gallery creation
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    gallery.insertAdjacentHTML('beforeend', `
        <a class="gallery__item" href=${item.original}>
            <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
    `);
});

// fullsize image showing
var lightbox = new SimpleLightbox('.gallery a', {captionType: 'attr', captionsData: 'alt', captionDelay: 250, });

// maybe code for the testing
console.log(galleryItems);
