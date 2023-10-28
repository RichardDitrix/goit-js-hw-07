import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemMarkup = ({ preview, original, description }) => {
	return `
	<li>
	  <a class="gallery__item" href="${original}">
	  <img 
	  style="display:block"
	  class="gallery__image"
	  src="${preview}"
	  alt="${description}"
	  />
	</a>
	</li>
	`;
 };
 
 const finishGalleryMarkup = galleryItems.map(galleryItemMarkup).join('');
 
 const galleryElements = document.querySelector('.gallery');
 
 galleryElements.insertAdjacentHTML('beforeend', finishGalleryMarkup);
 
 let finalGallery = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
 });