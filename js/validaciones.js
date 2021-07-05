
// pagina de contacto variables
const inputs = document.querySelectorAll(".input");
const usuario = document.querySelector("#name-cont");
const email = document.querySelector("#email-cont");
const telefono = document.querySelector("#phone-cont");
const mensaje = document.querySelector("#message-cont");
const form = document.querySelector("#contact-form");
const sendBtn = document.querySelector("#enviar-form");
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//funcion focus y blur

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// pagina de contacto validaciones

eventListener();
function eventListener() {
  document.addEventListener("DOMContentLoaded", startApp);
  usuario.addEventListener("blur", validateForm);
  email.addEventListener("blur", validateForm);
  telefono.addEventListener("blur", validateForm);
  mensaje.addEventListener("blur", validateForm);
  sendBtn.addEventListener("click", submitForm);
}

function startApp() {
  sendBtn.disabled = true;
}

function validateForm(e) {
  const error = document.querySelector("p.error");

  if (e.target.value.length > 0) {
    if (error) {
      error.remove();
    }
    // todo bien
  } else {
    showError("Todos los campos son obligatorios");
  }

  if (e.target.type === "email") {
    if (emailRegex.test(e.target.value)) {
      if (error) {
        error.remove();
      }
    } else {
      showError("El email no es valido");
    }
  }

  if (
    emailRegex.test(email.value) &&
    email.value !== "" &&
    mensaje.value !== "" &&
    usuario.value !== "" &&
    telefono.value !== ""
  ) {
    sendBtn.disabled = false;
  }
}

function showError(msg) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = msg;
  errorMessage.classList.add("error", "mt-2");
  const errors = document.querySelectorAll(".error");
  if (errors.length === 0) {
    form.append(errorMessage);
  }
}

function submitForm() {}

function resetForm() {
  form.reset();
}
=======
class User {
  constructor(userName, role, password) {
    this.userName = userName;
    this.role = role;
    this.password = password;
  }

  static redirectUser() {
    if (this.role === "administrator") {
      window.location.href = "admin-page.html";
    } else {
      window.location.href = "index.html";
    }
  }
}

class Admin extends User {
  constructor(userName, role, password) {
    super(userName, role, password);
  }
}

class CommonUser extends User {
  constructor(userName, role, password) {
    super(userName, role, password);
  }
}

const userType = new Admin("Admin", "administrator", 12345);
const userType2 = new CommonUser("User", "user", 6789);



  const TITLE_SELECTOR = document.querySelector("#songTtile");
  const DURATION_SELECTOR = document.querySelector("#songDuration");
  const ALBUM_SELECTOR = document.querySelector("#songAlbum");
  const ARTIST_SELECTOR = document.querySelector("#songArtist");
  const CATEGORY_SELECTOR = document.querySelector("#songCategory");
  const BTN_FORM_SELECTOR = document.querySelector("#btn-form-properties");
  const HIGHLIGHT_SONG_SELECTOR = document.querySelector("#songHighlighted");
  BTN_FORM_SELECTOR.disabled = true;

  TITLE_SELECTOR.addEventListener("change", formSongValidations);
  DURATION_SELECTOR.addEventListener("change", formSongValidations);
  ALBUM_SELECTOR.addEventListener("change", formSongValidations);
  ARTIST_SELECTOR.addEventListener("change", formSongValidations);
  CATEGORY_SELECTOR.addEventListener("change", formSongValidations);
  HIGHLIGHT_SONG_SELECTOR.addEventListener("change", formSongValidations);

  function formSongValidations() {
    if (
      document.querySelector("#songTtile").value === "" ||
      document.querySelector("#songDuration").value === "" ||
      document.querySelector("#songAlbum").value === "" ||
      document.querySelector("#songArtist").value === "" ||
      document.querySelector("#songCategory").value === "" ||
      document.querySelector("#songHighlighted").value === ""
    ) {
      BTN_FORM_SELECTOR.disabled = true;
    } else {
      BTN_FORM_SELECTOR.disabled = false;
    }
  }

    const FORM_SELECTOR = document.querySelector("#song-form");
    FORM_SELECTOR.addEventListener("submit", (e) => {
      e.preventDefault();
      const image = document.querySelector("#songImage").value;
      const title = document.querySelector("#songTtile").value;
      const duration = document.querySelector("#songDuration").value;
      const album = document.querySelector("#songAlbum").value;
      const artist = document.querySelector("#songArtist").value;
      const category = document.querySelector("#songCategory").value;

      const song = new Songs(image, title, duration, album, artist, category);

      UI.addSongsToList(song);

      Store.addSongToLS(song);
    });
