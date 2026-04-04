const refs = {
  openModalBtns: document.querySelectorAll('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

refs.openModalBtns.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.backdrop.classList.toggle('is-hidden');
}
