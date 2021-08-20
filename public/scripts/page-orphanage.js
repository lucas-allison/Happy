const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map("mapid", options).setView([lat , lng], 15);

// create an add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create an add marker
L
  .marker([lat, lng], { icon })
  .addTo(map);

/* image galley */

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active")
  });
  /*function removeActiveClass(button) {
    button.classList.remove("active");
  }*/

  // seleciona a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-detail > img")

  //atualizar o conatainer da img
    imageContainer.src = image.src


  // adicionar a classse  .active para este botao
  button.classList.add("active");
}
