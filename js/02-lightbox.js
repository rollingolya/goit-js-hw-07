import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryModalClick);

// Створюю розмітку html
function createGalleryItemsMarkup(items) {
    return items
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}" 
          alt="${description}"/>
        </a>
      `;
    })
      .join("");
}

function onGalleryModalClick(evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== 'IMG') {
        return;
    }
    
}

const lightbox = new SimpleLightbox('.gallery a', { 
    captionPosition: 'bottom',
    captionsData:'alt', 
    captionDelay:250,
});
