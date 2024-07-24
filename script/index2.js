const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const artistInput = document.querySelector(".input__text_type_artist");
const titleInput = document.querySelector(".input__text_type_title");
const form = document.forms.add;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);
  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songsContainer.append(songElement);
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Prevenir el envío del formulario

  const artistValue = artistInput.value; // Obtener los valores de los inputs
  const titleValue = titleInput.value;

  addSong(artistValue, titleValue); // Llamar a la función con los valores correctos
  artistInput.value = ""; // Limpiar los campos del formulario
  titleInput.value = "";
});

form.addEventListener;
