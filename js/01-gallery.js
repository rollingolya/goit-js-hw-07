import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
// Change code below this line

const galerryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(galleryItems);

galerryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// Створюю розмітку html
function createGalleryItemsMarkup(items) {
    return items
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `;
    })
      .join("");
}

console.log(galleryItems);

// create gallery items

const instance = basicLightbox.create(`<img src="${e.target.dataset.source}>`,
{
  onShow: () => { document.addEventListener("keydown", onEsc) },
  onClose: () => { document.removeEventListener("keydown", onEsc) }
});

instance.show()
 
