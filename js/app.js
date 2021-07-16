const getComments = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const comments = await response.json();
  createComments(comments.slice(0, 5));
}

getComments();

function createComments (comments) {
  comments.forEach((comments) => {
    const SECTION_COMMENTS_SELECTOR = document.querySelector("#userCommentsId");
    const divComment = document.createElement("div");
    divComment.innerHTML = `
    <h5>${comments.name}</h5>
    <p>${comments.body}</p>
    `;
    SECTION_COMMENTS_SELECTOR.append(divComment);
  })
}