import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

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
               alt="${description}"
             />
           </a>
         </li>`
    )
        .join('');
}


const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
    captionPosition: 'bottom'
});

console.log(galleryItems);
