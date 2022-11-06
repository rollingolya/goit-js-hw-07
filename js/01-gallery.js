import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

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

galerryContainer.addEventListener('click', onGalleryModalClick);

function onGalleryModalClick(evt) {
  evt.preventDefault();
  // забороняє відкривати лінк в новому вікні
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width = "800" height = "600">`
);

  instance.show();

  instance.element().querySelector('img').src = evt.target.dataset.source;
  // атрибут src всім елементам img замінєє на source 
};


function onEsc(evt) {
  if (evt.code === 'Escape') {
    instance.close();
  }
}
 
