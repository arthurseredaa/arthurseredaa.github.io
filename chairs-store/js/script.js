window.addEventListener('DOMContentLoaded', function() {
  // MODAL
  let overlayLink = document.getElementById('contact-link'),
      overlay = document.querySelector('.overlay'),
      fadeBlock = document.querySelector('.fade'),
      popupClose = document.querySelector('.popup-close'),
      formSubmit = document.querySelectorAll('.form__submit-modal');
  
  // MODAL FOR SUBMIT BUTTON
  //function for one elem that must show modal window
  function setModalOne(elem, modal, bgOverlay) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display ="block";
      modal.style.top = `${window.pageYOffset + 200}px`;
      bgOverlay.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  };
  // function for array of elements that must show modal window 
  function setModalArr(elem, modal, bgOverlay) {
    for(let i = 0; i < elem.length; i++) {
      elem[i].addEventListener('click', (e) => {
        e.preventDefault(); //reset default settings
        modal.style.display = "block";
        modal.style.top = `${window.pageYOffset + 200}px`;
        bgOverlay.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    };
  };
  setModalArr(formSubmit, overlay, fadeBlock); //for submit buttons
  setModalOne(overlayLink, overlay, fadeBlock); //for link in header

  //set properties for close icon
  popupClose.addEventListener('click', () => {
    overlay.style.display = "none";
    fadeBlock.style.display = "none";
    document.body.style.overflow = "";
  });
  // MODAL END

  
});
