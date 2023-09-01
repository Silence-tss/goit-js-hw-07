import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const previewImageUrlEl = document.querySelector(".gallery__link");



galleryItems.forEach((image) => {
    const previewImageUrl = image.preview;
    

    const originalImageUrl = image.original;
    const descriptionImageAlt = image.description;
    console.log(previewImageUrl);
    console.log(originalImageUrl);
    console.log(descriptionImageAlt);
  });



// const gallery = document.querySelector('.gallery');
// const modal = document.querySelector('.modal');
// const modalImage = document.querySelector('.modal__image');
// const modalClose = document.querySelector('.modal__close');

// gallery.addEventListener('click', (event) => {
//       event.preventDefault();

//       if (event.target.classList.contains('gallery__image')) {
//         const largeImageSrc = event.target.getAttribute('data-source');
//         modalImage.src = largeImageSrc;
//         modal.style.display = 'block';
//       }
//     });

//     modalClose.addEventListener('click', () => {
//       modal.style.display = 'none';
//     });

//     modal.addEventListener('click', (event) => {
//       if (event.target === modal) {
//         modal.style.display = 'none';
//       }
//     });

