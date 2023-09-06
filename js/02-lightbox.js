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
      alt="${item.description}"
    />
    </a>
  </li>`
  ).join(" ");

  galleryEl.insertAdjacentHTML ("beforeend", galleryItemEl);

  let gallery = new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250,
  });



