function setModal(trigger, modal, close) {
  // создаем переменные.
  // create variables.
  //trigger — кнопка/блок/другой елемент, по нажатию которого должно появлятся модальное окно.
  // modalElem — само модальное окно.
  //modalClose — елемент, который будет закрывать наше окно.
  // !!!!!!ВАЖНО
  // Для правильной работы задайте стили в css которые есть на скриншоте в README.
  let triggerBtn = document.querySelector(trigger),
      modalElem = document.querySelector(modal),
      modalClose = document.querySelector(close);

  triggerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalElem.classList.remove('hide');
    modalElem.classList.add('show');
  });

  modalClose.addEventListener('click', () => {
    modalElem.classList.remove('show');
    modalElem.classList.add('hide');
  })
}

setModal('.btn-setModal', '.modal', '.modal-close');