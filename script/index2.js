const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const artistInput = document.querySelector(".input__text_type_artist");
const titleInput = document.querySelector(".input__text_type_title");
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);
  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songsContainer.append(songElement);
}

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute("disabled");
    addButton.classList.remove("input__btn_disabled");
  } else {
    addButton.setAttribute("disabled", true);
    addButton.classList.add("input__btn_disabled");
  }
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const artistValue = artistInput.value;
  const titleValue = titleInput.value;

  addSong(artistValue, titleValue);
  artistInput.value = "";
  titleInput.value = "";
});

form.addEventListener("input", function (evt) {
  const isValid = artist.value.length > 0 && title.value.length > 0;
  console.log(evt);

  setSubmitButtonState(isValid);
});
