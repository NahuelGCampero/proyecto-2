class Songs {
  constructor(image ,title, duration, album, artist, category, highlightedSong) {
    this.id = Date.now();
    this.image = image;
    this.title = title;
    this.duration = duration;
    this.album = album;
    this.artist = artist;
    this.category = category;
    this.highlightedSong = highlightedSong;
  }
}

class UI {
  static displaySongs() {
    const storedSongs = Store.getSongs();
    storedSongs.forEach((song) => UI.addSongsToList(song));
  }

  static addSongsToList(song) {
    const SONGLIST_SELECTOR = document.querySelector("#songList");
    const row = document.createElement("tr");
    row.id = song.id;
    row.innerHTML = `
    <td class="border-top-0">${song.id}</td>
    <td><img src="${song.image}" width="40px" height="40px"></td>
    <td>${song.title}</td>
    <td>${song.duration}</td>
    <td>${song.album}</td>
    <td>${song.artist}</td>
    <td>${song.category}</td>
    <td>
    <span class="material-icons">
      <i>delete</i>
      <i>edit</i>
    </span>
    </td>
    `;
    SONGLIST_SELECTOR.append(row);
    //Añadir después de <td>${song.category}</td> botones para eliminar, destacar y editar canción
  }
}

class Store {
  static getSongs() {
    //Método estatico para que const storedSongs = Store.getSongs pueda acceder
    let songs;
    if (localStorage.getItem("songs") === null) {
      songs = [];
    } else {
      songs = JSON.parse(localStorage.getItem("songs"));
    }
    return songs;
  }

  static addSongToLS(song) {
    const songs = Store.getSongs();
    songs.push(song);
    localStorage.setItem("songs", JSON.stringify(songs));
  }

  static deleteSong = (id) => {
    let songToDelete = Store.getSongs();
    songToDelete = songToDelete.filter((song) => song.id != id);
    updateLs(songToDelete);
  };
}

updateLs = (songs) => {
  localStorage.setItem("songs", JSON.stringify(songs));
  UI.addSongsToList()
}

document.addEventListener("DOMContentLoaded", UI.displaySongs);

const tbody_selector = document.querySelector("#songList");

tbody_selector.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.innerHTML == "delete") {
    if (e.target.innerHTML == "delete") {
      const elementId = e.target.parentElement.parentElement.parentElement.id;
      Store.deleteSong(elementId);
    }
  }
});
