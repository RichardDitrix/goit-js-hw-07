import { galleryItems } from './gallery-items.js';
// Change code below this line

function gallery(galleryItems) {
	return galleryItems.map(({preview, original, description}) => {
		return `
		<div class="gallery__item">
	  <a class="gallery__link" href="large-image.jpg">
		 <img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
		 />
	  </a>
	</div>
		`;
	}).join('');	
}

const divGallery = document.querySelector(".gallery");

const galleryMarkUp = gallery(galleryItems);

divGallery.insertAdjacentHTML("beforeend", galleryMarkUp);

divGallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
	if (event.target.nodeName !== 'IMG') {
		return;
	 }
	 event.preventDefault();
	 modalShow(event.target.dataset.source);
  }

  let modal;
function modalShow(src) {
	modal = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      onShow: modal => {
        addListener();
      },
      onClose: modal => {
        removeListener();
      },
    },
  );
  modal.show();
}

function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
	modal.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}