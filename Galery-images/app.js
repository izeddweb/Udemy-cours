// set variable
const images = document.querySelectorAll('.gallery .photo-gallery img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('.modal img');

// set function
// when use display 

images.forEach(function(image) {
  image.onclick = function () {
    let alt = image.getAttribute('alt');
    let newSrc = image.style.src = `/image-galery-1/images/img-hd/${alt}.jpg`;
    imgModal.setAttribute('src',`${newSrc}`);
    modal.style.display = 'block';
    modal.onclick = function () {
        modal.style.display = 'none';
      }
  }
})

// when use opacity

// images.forEach(function(image) {
//   image.onclick = function () {
//     let alt = image.getAttribute('alt');
//     let z = image.style.src = `/image-galery-1/images/img-hd/${alt}.jpg`;
//     imgModal.setAttribute('src',`${z}`);
//       modal.style.opacity = 1;
//       modal.onclick = function () {
//         modal.style.opacity = 0;
//       }
//   }
// })






