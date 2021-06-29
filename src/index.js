import galleryItems from './app.js';

const refs = {
  galery: document.querySelector('.js-gallery'),
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

refs.galery.insertAdjacentHTML('afterbegin', images);
refs.galery.addEventListener('click', onModalOpen);
refs.modalCloseBtn.addEventListener('click', onModalClose);

function onModalClose() {
  refs.modal.classList.remove('is-open');
}
function onModalOpen(event) {
  event.preventDefault();
  refs.modal.classList.add('is-open');
  const target = event.target;
  console.log('event target: ', target);
  console.log('target.nodeName: ', target.nodeName);
}
