import { galleryItems } from './gallery-items.js';


document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");

  galleryItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");

    li.classList.add("gallery__item");
    a.href = item.original;
    a.classList.add("gallery__link");
    img.setAttribute("data-source", item.original);
    img.src = item.preview;
    img.alt = item.description;
    img.classList.add("gallery__image")

    gallery.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
  })
  
  const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,           // Habilita los subtítulos
        captionsData: 'alt',      // Usa el atributo 'alt' como subtítulos
        captionDelay: 250,        // Retraso de 250 ms para mostrar los subtítulos
        captionsPosition: 'bottom'// Posición de los subtítulos (en la parte inferior)
    });
})
