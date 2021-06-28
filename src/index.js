import galleryItems from './app.js';

const refs = {
  galerry: document.querySelector('.js-gallery'),
  modalCloseBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.js-lightbox'),
};

const images = galleryItems.reduce(
  (str, { preview, original, description }) =>
    str +
    `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`,
  '',
);

refs.galerry.insertAdjacentHTML('afterbegin', images);
refs.modalCloseBtn.addEventListener('click', onModalClose);

function onModalClose() {
  refs.modal.classList.remove('is-open');
}
function onModalOpen() {
  refs.modal.classList.add('is-open');

  refs.modalImage.src = `${galleryItems[0].preview}`;
}
