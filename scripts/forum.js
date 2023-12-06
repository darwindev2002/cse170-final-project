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

function editFilter(mode) {

  let menuSection = document.getElementsByClassName("menu-section")[mode];
  let editButton = document.getElementsByClassName("edit-btn")[mode];
  
  // If editing, a tick is displayed to confirm changes
  let isEditing = editButton.innerText == "✅";

  if (mode == 0 && !isEditing) {

    // Edit "your location"
    let currentLocation = menuSection.getElementsByClassName("filter-item")[0];
    let currentLocationText = currentLocation.innerText;
    currentLocation.parentNode.replaceWith(createInputBox(currentLocationText));

  } else if (mode == 0 && isEditing) {

    // Save "your location"
    let locationInput = menuSection.getElementsByClassName("filter-item")[0]
    let newLocation = locationInput.value;
    locationInput.parentNode.replaceWith(createFilterItem(0, newLocation));

  } else if (mode == 1 && !isEditing) {

    // Edit "interested sports"
    let currentSports = menuSection.getElementsByClassName("filter-item");
    for (sport of currentSports) {
      sport.parentNode.replaceWith(createInputBox(sport.innerText));
    }
    menuSection.getElementsByClassName("menu-items")[0].appendChild(createAddMoreBtn());

  } else if (mode == 1 && isEditing) {

    // Save "interested sports"
    let sportInputs = menuSection.getElementsByClassName("filter-item");
    for (sport of sportInputs) {
      sport.parentNode.replaceWith(createFilterItem(1, sport.value));
    }
    menuSection.getElementsByClassName("add-more-wrapper")[0].remove();

  } else if (mode == 2) {
    // Edit "interested cities"

  } else {
    // Do nothing
  }

  editButton.innerText = isEditing ? "✏️" : "✅";

  
}

function createAddMoreBtn(){
  let btn = document.createElement("p");
  btn.classList.add("add-more-wrapper");
  btn.innerHTML = `<button class="add-more">Add More</button>`;
  return btn;
}


function createInputBox(text) {
  /*
    <p>
      <input type="text" value="dummy">
    </p>
  */
  let inputWrapper = document.createElement("p");

  let inputElem = document.createElement("input");
  inputElem.classList.add("filter-item");
  inputElem.type = "text";
  inputElem.value = text;

  inputWrapper.appendChild(inputElem);

  return inputWrapper;
}

function createFilterItem(mode, text) {
  /*
    <p>
      📍 <span class="filter-item">San Diego</span>
    </p>
  */
  let itemWrapper = document.createElement("p");

  let itemSpan = document.createElement("span");
  itemSpan.classList.add("filter-item");
  itemSpan.innerText = text;

  itemWrapper.innerText = (mode != 1) ? "📍 " : "🏀 ";
  itemWrapper.appendChild(itemSpan)

  return itemWrapper;
}