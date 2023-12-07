function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

const forumPosts = [
  {
      "question": "Golf club suggestions?",
      "content": "Hey guys! I just recently moved to La Jolla. Any good recommendations for golf clubs?",
      "tagsSports": ["golf"],
      "tagsLocation": ["La Jolla", "San Diego"]
  },
  {
      "question": "Basketball team tryouts?",
      "content": "Looking to join a basketball team. Are there any local team tryouts coming up?",
      "tagsSports": ["basketball"],
      "tagsLocation": ["San Diego"]
  },
  {
      "question": "Good running tracks?",
      "content": "Can anyone suggest a good running track that's not too crowded?",
      "tagsSports": ["running", "track"],
      "tagsLocation": ["La Jolla", "San Diego"]
  },
  {
      "question": "Swimming pool with lap lanes?",
      "content": "I'm training for a triathlon and need a pool with lap lanes for practice. Suggestions?",
      "tagsSports": ["swimming", "triathlon"],
      "tagsLocation": ["San Diego", "La Jolla"]
  },
  {
      "question": "Yoga studio recommendations?",
      "content": "I'm looking to start yoga classes. Which studios would you recommend for beginners?",
      "tagsSports": ["yoga"],
      "tagsLocation": ["La Jolla"]
  },
  {
      "question": "Best places for indoor climbing?",
      "content": "Does anyone know any good spots for indoor climbing around town?",
      "tagsSports": ["climbing", "indoor sports", "fitness"],
      "tagsLocation": ["San Diego", "La Jolla", "Miramar", "El Cajon", "Coronado", "National City"]
  },
  {
      "question": "Seeking tennis partner",
      "content": "Intermediate player here looking for a tennis partner to play on weekends. Anyone interested?",
      "tagsSports": ["tennis", "racquet sports"],
      "tagsLocation": ["La Jolla", "San Diego", "Del Mar"]
  },
  {
      "question": "Where to buy the best sports gear?",
      "content": "In need of new sports gear, particularly for running and basketball. Where do you all shop?",
      "tagsSports": ["running", "basketball", "shopping"],
      "tagsLocation": ["San Diego", "La Jolla", "Pacific Beach", "Encinitas", "Carlsbad"]
  },
  {
      "question": "Cycling groups for beginners?",
      "content": "Recently took up cycling and looking for a group that welcomes beginners. Any leads?",
      "tagsSports": ["cycling", "biking"],
      "tagsLocation": ["San Diego", "Chula Vista", "La Mesa"]
  },
  {
      "question": "Outdoor volleyball courts?",
      "content": "Looking for public volleyball courts that are beachside. Any known locations?",
      "tagsSports": ["volleyball", "beach sports"],
      "tagsLocation": ["La Jolla", "Ocean Beach", "Mission Beach", "Imperial Beach"]
  },
  {
      "question": "Marathon training advice needed",
      "content": "Starting to train for my first marathon. Would appreciate any advice or training regimens.",
      "tagsSports": ["running", "marathon", "long-distance running"],
      "tagsLocation": ["San Diego", "Balboa Park", "Point Loma"]
  },
  {
      "question": "Soccer leagues for adults?",
      "content": "Are there any local soccer leagues or pickup games that happen in the area for adults?",
      "tagsSports": ["soccer", "football", "team sports"],
      "tagsLocation": ["San Diego", "La Jolla", "Escondido", "Santee", "Poway", "San Marcos"]
  }
]

const connectPosts = [
  {
      "question": "Looking for 2 more teammates for the basketball tournament this weekend",
      "content": "We're participating in the local basketball 3-on-3 tournament this Saturday and need two more players. Preferably forwards or centers. Hit us up if you're interested!",
      "tagsSports": ["basketball", "tournament"],
      "tagsLocation": ["downtown"]
  },
  {
      "question": "Need a goalie for our soccer team ASAP!",
      "content": "Our regular keeper is out with an injury, and we need someone to fill in for our games this month. Experience in goalkeeping is required.",
      "tagsSports": ["soccer", "goalie"],
      "tagsLocation": ["midtown"]
  },
  {
      "question": "Seeking a doubles partner for tennis league",
      "content": "I'm an intermediate-level player looking for a partner in the mixed doubles tennis league starting next month. Let's win some matches together!",
      "tagsSports": ["tennis", "doubles"],
      "tagsLocation": ["eastside"]
  },
  {
      "question": "Anyone up for a beach volleyball match?",
      "content": "I'm trying to get a 4-person beach volleyball game going this Sunday at the pier. All skill levels are welcome!",
      "tagsSports": ["volleyball", "beach"],
      "tagsLocation": ["beachside"]
  },
  {
      "question": "Urgent: Cyclist needed for team event",
      "content": "Our cycling team needs one more rider for the relay race at the upcoming cycling festival. We're aiming for at least a top 5 finish!",
      "tagsSports": ["cycling", "relay race"],
      "tagsLocation": ["west end"]
  },
  {
      "question": "Join our ultimate frisbee group this Thursday",
      "content": "We play casual ultimate frisbee games every Thursday evening and we're looking for more people to join. No experience necessary!",
      "tagsSports": ["ultimate frisbee"],
      "tagsLocation": ["central park"]
  },
  {
      "question": "Forming a co-ed softball team for the local league",
      "content": "Want to play softball? We're forming a new co-ed team for the local league and looking for players of all positions.",
      "tagsSports": ["softball", "co-ed"],
      "tagsLocation": ["north"]
  },
  {
      "question": "Rugby players wanted for friendly matches",
      "content": "Our rugby club is looking for new members to join friendly matches on weekends. If you're interested in playing or learning the game, come join us!",
      "tagsSports": ["rugby"],
      "tagsLocation": ["southside"]
  },
  {
      "question": "Looking for marathon training partners",
      "content": "I'm training for my first full marathon and would love some company on long runs. Planning to do a 20-mile run this weekend.",
      "tagsSports": ["running", "marathon"],
      "tagsLocation": ["river trail"]
  },
  {
      "question": "Cricket enthusiasts in the city?",
      "content": "We're a group of cricket lovers playing every weekend and looking for new members to join our friendly matches. All skill levels are welcome!",
      "tagsSports": ["cricket"],
      "tagsLocation": ["downtown cricket grounds"]
  },
  {
      "question": "2 players needed for mixed badminton doubles",
      "content": "Our team is participating in the local badminton tournament and we're short two players for mixed doubles. Let's smash it!",
      "tagsSports": ["badminton", "mixed doubles"],
      "tagsLocation": ["sports complex"]
  }
]



function loadPosts(mode) {
  // mode 0 -> Main Forum
  // mode 1 -> Conenct Forum

  let postsWrapper = document.getElementsByClassName(mode == 0 ? "forum-posts" : "connect-posts")[0];

  (mode == 0 ? forumPosts : connectPosts).forEach((post) => {
    postsWrapper.appendChild(createThreadElement(post, mode));
  })

}

function createThreadElement(thread, mode) {
  let wrapper1 = document.createElement("a");
  wrapper1.href = mode == 0 ? "./forum-thread.html" : "connect-post.html";

  let wrapper2 = document.createElement("div");
  wrapper2.classList.add(mode == 0 ? "forum-post" : "connect-post");

  let avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.innerText = "🧑";

  let wrapper3 = document.createElement("div");
  wrapper3.classList.add("post-content");

  let title = document.createElement("h2");
  title.innerText = thread.question;

  let content = document.createElement("p");
  content.innerText = thread.content;

  let breakLine = document.createElement("hr");
  breakLine.classList.add("post-content-breakline");

  let tags = document.createElement("div");
  tags.classList.add("tags");
  thread.tagsSports.forEach((tag) => tags.appendChild(createTagElement(tag)));
  thread.tagsLocation.forEach((tag) => tags.appendChild(createTagElement(tag)));

  wrapper3.append(title, content, breakLine, tags);
  wrapper2.append(avatar, wrapper3);
  wrapper1.appendChild(wrapper2);

  return wrapper1;
}

function createTagElement(tag) {
  let elem = document.createElement("span");
  elem.classList.add("tag");
  elem.innerText = tag;
  return elem;
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

  } else if ((mode == 1 || mode == 2) && !isEditing) {

    // Edit "interested sports/cities"
    console.log("here")
    let currentItems = menuSection.querySelectorAll(".filter-item");
    for (item of currentItems) {
      if (item.innerText.trim().length > 0) {
        item.parentNode.replaceWith(createInputBox(item.innerText.trim()));
      } else {
        item.parentNode.remove();
      }
    }
    if (currentItems.length != 5) {
      menuSection.getElementsByClassName("menu-items")[0].appendChild(createAddMoreBtn());
    }

  } else if ((mode == 1 || mode == 2) && isEditing) {

    // Save "interested sports"
    let itemInputs = menuSection.querySelectorAll(".filter-item");
    for (item of itemInputs) {
      if (item.value.trim().length > 0) {
        item.parentNode.replaceWith(createFilterItem(1, item.value.trim()));
      } else {
        item.parentNode.remove();
      }
      // item.parentNode.replaceWith(createFilterItem(1, item.value));
    }
    menuSection.getElementsByClassName("add-more-wrapper")[0]?.remove();

  } else {
    // Do nothing
  }

  editButton.innerText = isEditing ? "✏️" : "✅";
  
}

function createAddMoreBtn(){
  let btnWrapper = document.createElement("p");
  btnWrapper.classList.add("add-more-wrapper");

  let btn = document.createElement("button");
  btn.classList.add("add-more");
  btn.innerText = "Add More";
  btn.addEventListener("click", function() {
    if (this.parentNode.parentNode.childElementCount == 5) {
      // must this.parentElement.parentElement.lastElementChild.classList.contains("add-more-wrapper")
      this.parentNode.replaceWith(createInputBox(""));
    } else {
        this.parentNode.parentNode.insertBefore(createInputBox(""), this.parentNode.parentNode.lastChild);
    }
  });

  btnWrapper.appendChild(btn);

  // btnWrapper.innerHTML = `<button class="add-more">Add More</button>`;
  return btnWrapper;
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

  let trash = document.createElement("button");
  trash.classList.add("trash-btn")
  trash.innerText = "❌"
  trash.addEventListener("click", function() {
    if (this.parentNode.parentNode.childElementCount == 5) {
      console.log(this.parentElement.parentElement.lastChild.classList)
      if (this.parentElement.parentElement.lastChild.classList.contains("add-more-wrapper")) {
        this.parentNode.remove();
      } else {
        this.parentNode.parentNode.appendChild(createAddMoreBtn());
        this.parentNode.remove()
      }
    } else {
      this.parentNode.remove();
    }
  });

  inputWrapper.append(inputElem, trash);

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

  itemWrapper.innerHTML = (mode != 1) ? '📍&nbsp;' : '🏀&nbsp;';
  itemWrapper.appendChild(itemSpan)

  return itemWrapper;
}


loadPosts(window.location.href.endsWith("forum-home.html") ? 0 : 1);