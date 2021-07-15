class User {
  constructor(userName, role, password) {
    this.userName = userName;
    this.role = role;
    this.password = password;
  }

  static redirectUser(userType) {
    const users = StoreUsers.getUsers();
    users.find(
      (user) =>
        userInputField2.value === user.userName && //recordar cambiar los inputs
        passwordInputField2.value === user.password
    );
    if (userType.userName === "Admin") {
      window.location.href = "admin-page.html";
      sayHi;
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

function sayHi(user) {
  const ELEMENT_TO_REPLACE_SELECTOR = document.querySelector("#signInAnSignUp");
  const NEW_ELEMENT = document.createElement("p");
  NEW_ELEMENT.classList.add("class", "m-0", "text-white");
  NEW_ELEMENT.textContent = `Hola, ${user.userName}`;
  ELEMENT_TO_REPLACE_SELECTOR.parentNode.replaceChild(
    NEW_ELEMENT,
    ELEMENT_TO_REPLACE_SELECTOR
  );
}

//sayHi(User.redirectUser);

class StoreUsers {
  static getUsers() {
   let users;
    if (localStorage.getItem("user") === null) {
      users = [];
   } else {
      users = JSON.parse(localStorage.getItem("user"));
    }
    return users;
  }

  static addUserToLS(user) {
    const users = StoreUsers.getUsers();
    users.push(user);
   localStorage.setItem("user", JSON.stringify(users));
  }
}

  //Agregar formulario de inicio de sesión. Capturar datos y llamar User.redirectUser(user)
  //Agregar formulario de registro. Para añadir usuarios al LS

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
      const highlightedSong = document.querySelector("#songHighlighted").value;

      const song = new Songs(image, title, duration, album, artist, category, highlightedSong);

      UI.addSongsToList(song);

      Store.addSongToLS(song);
    });
