import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
const galleryItemEl = galleryItems.map(item => 
  `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    </a>
  </li>`
  ).join(" ");


  galleryEl.innerHTML = galleryItemEl;


  galleryEl.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target.tagName === "IMG") {
      const originalImageEl = evt.target.getAttribute("data-source");

      const instance = basicLightbox.create(`
      <img src="${originalImageEl}" alt="${evt.target.alt}" />`)

      instance.show();
    }
  });