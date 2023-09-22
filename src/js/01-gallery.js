import { galleryItems } from './gallery-items.js';

// Change code below this line

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  let lightboxInstance = null;
  
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

  gallery.addEventListener("click", (event) => {
        event.preventDefault();

        if (event.target.tagName === "IMG") {
            const modalSource = event.target.dataset.source;

            if (lightboxInstance) {
                lightboxInstance.close();
            }

            lightboxInstance = basicLightbox.create(`<img src="${modalSource}">`);
            lightboxInstance.show();

            document.addEventListener("keydown", onEscKeyPress);
        }
    });

  const onEscKeyPress = (event) => {
      if (event.key === "Escape" && lightboxInstance) {
          lightboxInstance.close();
         
          document.removeEventListener("keydown", onEscKeyPress);
      }
  }
})
