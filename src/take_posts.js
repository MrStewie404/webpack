function getPosts() {
  return fetch('http://localhost:3000/user')
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

function getComments() {
  return fetch('http://localhost:3000/groups')
    .then(response => response.json())
    .then(data => {
      return data;
    });
}

const buttonPosts = document.getElementById('myButtonPosts');
const buttonComments = document.getElementById('myButtonComments');
const outputPosts = document.getElementById('posts-container'); 
const outputComments = document.getElementById('comments-container'); 
let postsLoaded = false; // Флаг, чтобы отслеживать, загружены ли посты
let commentsLoaded = false; // Флаг, чтобы отслеживать, загружены ли посты

buttonPosts.addEventListener('click', function() {
  if (!postsLoaded) {
    postsLoaded = true;
    getPosts().then(posts => {
      for (const post of posts) {
        const postElement = document.createElement('p'); 
        postElement.textContent = (`${post.id} ${post.name}`); 
        outputPosts.appendChild(postElement);
      }
      outputPosts.classList.add('show'); 
    })
  }
});

buttonComments.addEventListener('click', function() {
  if (!commentsLoaded) {
    commentsLoaded = true;
    getComments().then(comments => {
      for (const comment of comments) { // Используем comments вместо posts
        const commentElement = document.createElement('p');
        console.log('123')
        commentElement.textContent = (`${comment.id} ${comment.name}`); 
        outputComments.appendChild(commentElement);
      }
      outputComments.classList.add('show'); 
    })
  }
});
