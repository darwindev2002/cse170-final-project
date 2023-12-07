const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function addDummyFromMe() {

  let messageInput = document.getElementById('chat-message');
  let messageText = messageInput.value.trim();

  let chatWrapper = document.getElementById("chat-container");

  let messageWrapper = document.createElement("div");
  messageWrapper.classList.add("chat-message", "from-me");
  
  let msg = document.createElement("div")
  msg.classList.add("text");
  msg.innerText = messageText;
  // msg.innerText = ;


  let avatar = document.createElement("div")
  avatar.classList.add("avatar");
  avatar.innerText = "🧑";

  messageWrapper.append(msg, avatar);

  chatWrapper.appendChild(messageWrapper);

  window.scrollTo(0, document.body.scrollHeight);
  messageInput.value = "";

  updateBtn();
}

function addDummyFromThem() {

  let chatWrapper = document.getElementById("chat-container");

  let messageWrapper = document.createElement("div");
  messageWrapper.classList.add("chat-message", "from-them");
  
  let msg = document.createElement("div")
  msg.classList.add("text");
  msg.innerText = dummyText;


  let avatar = document.createElement("div")
  avatar.classList.add("avatar");
  avatar.innerText = "🧑";

  messageWrapper.append(avatar, msg);

  chatWrapper.appendChild(messageWrapper);

  window.scrollTo(0, document.body.scrollHeight);

}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);;
}

function updateBtn() {
  let replyInput = document.getElementById('chat-message');
  let replyText = replyInput.value.trim();

  let sendBtn = document.getElementById("send-button");

  if (replyText.length > 0) {
    sendBtn.disabled = null;
    sendBtn.style.backgroundColor = "#1c8aff";
  } else {
    sendBtn.disabled = true;
    sendBtn.style.backgroundColor = "#cccccc";
  }
}

window.onload = scrollToBottom;


if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollToBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollToBottom);