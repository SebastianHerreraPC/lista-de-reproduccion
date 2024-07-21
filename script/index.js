//declaracion de variables
const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const artistInput = document.querySelector(".input__text_type_artist");
const titleInput = document.querySelector(".input__text_type_title");

//funcion de agregar
function addSong(artistValue, songValue) {
  const songsTemplate = document.querySelector("#song-template").content;
  const songElement = songsTemplate.cloneNode(true);
  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = songValue;
  songsContainer.append(songElement);
}
//fucion de el boton
addButton.addEventListener("click", function () {
  addSong(artistInput.value, titleInput.value);
});
