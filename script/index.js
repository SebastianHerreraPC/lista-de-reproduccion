//seleccion de elemento
let container = document.querySelector(".container ");
let songsContainer = container.querySelector(".songs-container");
let songs = songsContainer.querySelectorAll(".song");

//variables de botones
let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");

//boton reset apagado si no hay canciones

if (songs.length === 0) {
  resetButton.setAttribute("disabled", true);
}
