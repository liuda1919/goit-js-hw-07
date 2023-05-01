import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
function createGalleryMarkup(items) {
    return items
    .map(
        ({ preview, original, description }) =>
            `<li class = "gallery__item">
            <a class="gallery__link" href = "${original}">
            <img 
             class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
             />
           </a>
         </li>`
    )
        .join('');
}

galleryList.addEventListener('click', onGalleryItemClick); 
function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const urlImg = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${urlImg}">`);
    instance.show();
    document.addEventListener('keydown', onEscKeyPress);


    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', onEscKeyPress);
        }
    }
}
console.log(galleryItems);
