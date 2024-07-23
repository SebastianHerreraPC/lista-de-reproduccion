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

//controlador de eventos teclado
titleInput.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
  if (evt.key.toLowerCase() === "e") {
    evt.preventDefault();
  }
});

artistInput.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
});

function keyHandler(evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
}

addButton.addEventListener("click", function () {
  addSong(artistInput.value, titleInput.value);
});

artistInput.addEventListener("keydown", keyHandler);
titleInput.addEventListener("keydown", keyHandler);

const coverHeading = document.querySelector(".cover__title");
const playListTitles = [
  "Música clásica de ascensor - Volumen IV",
  "Canciones para hacer calceta",
  "Mis canciones de gaita favoritas",
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener("dblclick", function () {
  coverHeading.textContent = getRandomElement(playListTitles);
});

function doubleClickHandler(event) {
  coverHeading.textContent = getRandomElement(playListTitles);
  coverHeading.removeEventListener("dbclick", doubleClickHandler);
}

// songElement.querySelector(".song__like").addEventListener("click", function (evt) {
//     evt.target.classList.toggle("song__like_active");
//   });

songsContainer.addEventListener("click", function (evt) {
  console.log(evt);
});

const addForm = document.querySelector("add");
console.log(document.forms[0]);
