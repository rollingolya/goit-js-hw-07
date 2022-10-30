import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galerryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemsMarkup (items);

galerryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryItemsMarkup (items) {
    return items.map(({preview, original, description}) => {
        return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="large-image.jpg"
        alt="${description}"
      />
    </a>`
    })
    .join('');

}
 
