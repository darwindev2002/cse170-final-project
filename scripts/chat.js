const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function addDummyFromMe() {

  var messageContainer = document.getElementById('chat-container');
  var messageInput = document.getElementById('chat-message');
  var messageText = messageInput.value.trim();

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
}

function addDummyFromThem() {
  
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);;
}

window.onload = scrollToBottom;


if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollToBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollToBottom);