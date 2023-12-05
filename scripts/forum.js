function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

function createPost() {
  document.getElementById('create-post-form').addEventListener('submit', function(event){
    event.preventDefault();
    
    // Gather data from the form
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;
    var tagsSports = document.getElementById('post-tags-sports').value;
    var tagsLocations = document.getElementById('post-tags-locations').value;

    // Process the form data (e.g., send to a server or log to the console)
    console.log('Post Created:', title, content, tagsSports, tagsLocations);

    // Here you would normally send the data to the server.
    // For the purpose of this example, we'll just clear the form
    document.getElementById('create-post-form').reset();
});
}

function addDummyComment() {

  let postContainer = document.getElementById('post-container');

  let replyInput = document.getElementById('reply-input');
  let replyText = replyInput.value.trim();

  let replyUser = document.createElement("div");
  replyUser.classList.add("post-user");
  replyUser.innerHTML = "<span class=\"avatar\">🧑</span> Harry Chan • 1s";

  let replyTextWrap = document.createElement("p");
  replyTextWrap.innerText = replyText

  let replyWrapper = document.createElement("div");
  replyWrapper.classList.add("forum-post", "reply-post");

  replyWrapper.append(replyUser, replyTextWrap);

  postContainer.appendChild(replyWrapper);

  window.scrollTo(0, document.body.scrollHeight);
  replyInput.value = "";

  updateBtn();
}

function updateBtn() {
  let replyInput = document.getElementById('reply-input');
  let replyText = replyInput.value.trim();

  let sendBtn = document.getElementById("reply-button");
  // let btnWrapper = document.getElementById("button-wrapper")

  if (replyText.length > 0) {
    sendBtn.disabled = null;
    sendBtn.style.backgroundColor = "#2d90fa";
  } else {
    sendBtn.disabled = true;
    sendBtn.style.backgroundColor = "#cccccc";
  }
}