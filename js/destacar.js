//seleccionar inputs
  const title = document.querySelector("#songTtile");
  const duracion = document.querySelector("#songDuration");
  const album = document.querySelector("#songAlbum");
  const artista = document.querySelector("#songArtist");
  const destacar = document.querySelector("#songHighlighted");

  //other
  const newListOfSongs = document.querySelector("#songList")
  const form = document.getElementById("#song-form");
  const sendBtn = document.querySelector("#btn-form-properties");
  let newSongs = []


//   const createSongs = (song) => {
//     const item = {
//       song,
//       status: false,
//       id: Date.now()
//     }
//     newSongs.push(item);
//     console.log(song)
//     return item;
//   }
  
// form.addEventListener('submit', (e) =>{
//   e.preventDefault();
//   const song = form.value;
//   createSongs(song);
// })


//   const showItemsDom = () => {
//     if(newSongs.length > 0){
//       newSongs.forEach(newSong => {
//         if(newSong.status) {
//           newListOfSongs.innerHTML = `
//           <td class="border-top-0">${song.id}</td>
//           <td><img src="${song.image}" width="40px" height="40px"></td>
//           <td>${song.title}</td>
//           <td>${song.duration}</td>
//           <td>${song.album}</td>
//           <td>${song.artist}</td>
//           <td>${song.category}</td>
//           <td>
//           <span class="material-icons">
//             <i>delete</i>
//             <i>edit</i>
//           </span>
//           </td>
//           `;
//         }
//       })
//     }
//   }
//   const cleamDom = () => {
//     while(newListOfSongs.firstChild) {
//       newListOfSongs.removeChild(newListOfSongs.firstChild);
//     }
//   }

  // eventListener();
  // function eventListener(){
  //   document.addEventListener('DOMContentLoaded',startApp);
  //   title.addEventListener('blur', valideteForm);
  //   duracion.addEventListener("blur", valideteForm);
  //   album.addEventListener("blur", valideteForm);
  //   artista.addEventListener("blur", valideteForm);
  //   }

  // function startApp(){
  //   sendBtn.disabled = true;
  // }

  // function validateForm(e) {
  //   if(e.target.value.length > 0){
  //     e.target.style.border = 'border', 'border-success';
  //     e.target.classList.remove('border', 'border-danger');
  //   }else{
  //     e.target.classList.add('border', 'border-danger');
  //     showError('Todos los campos son obligatorios')
  //   }
  // }

  // function showError(msg) {
  //   const errorMessage = document.createElement('p');
  //   errorMessage.textContent = msg;
  //   errorMessage.classList.add()
  //   const error = document.querySelectorAll('.error');
  //   if(error.length === 0){
  //     form.append(errorMessage);
  //   }
    
  // }
