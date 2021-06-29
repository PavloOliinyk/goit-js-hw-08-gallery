import galleryItems from './app.js';

const refs = {
  galery: document.querySelector('.js-gallery'),
  modalCloseBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
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
refs.galery.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  onModalOpen(target);
});
refs.modalCloseBtn.addEventListener('click', onModalClose);

function onModalClose() {
  refs.modal.classList.remove('is-open');
  refs.modalImage.src = '';
}

function onModalOpen(target) {
  refs.modal.classList.add('is-open');
  console.log(target.src);

  galleryItems.filter(({ preview, original }) => {
    if (target.src === preview) {
      refs.modalImage.src = original;
    }
  });
}
