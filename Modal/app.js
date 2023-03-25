// set var
const buttonShow = document.querySelector('.btn-out')
const buttonClose = document.querySelector('.btn-in')
const modalContainer = document.querySelector('.modal-container')

// set function

buttonShow.onclick = function() {
  modalContainer.style.display ='block';
  buttonShow.style.display ='none';
  buttonClose.onclick = function() {
    modalContainer.style.display ='none';
    buttonShow.style.display ='block';
    buttonShow.style.margin='auto';
  }
}

// buttonShow.onclick = function() {
//   modalContainer.style.opacity ='1';
//   buttonShow.style.opacity ='0';
//   buttonClose.onclick = function() {
//     modalContainer.style.opacity ='0';
//     buttonShow.style.opacity ='1';
//   }
// }
