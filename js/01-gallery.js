import { galleryItems } from './gallery-items.js';
// Change code below this line

const galerryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryItemsMarkup(items);

galerryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// Створюю розмітку html
function createGalleryItemsMarkup(items) {
    return items
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
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

console.log(items);

// create gallery items

const instance = basicLightbox.create(`<img src="${e.target.dataset.source}>`,
{
  onShow: () => { document.addEventListener("keydown", onEsc) },
  onClose: () => { document.removeEventListener("keydown", onEsc) }
});

instance.show()
 
