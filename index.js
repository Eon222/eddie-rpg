const messageButton = document.querySelector(".message-button");
const message = document.querySelector(".message");
const mainContent = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var botao = document.querySelector(".message-button");
    botao.style.display = "block";
  }, 5000);
});

function removeMessage() {
  message.style.display = "none"
  
  // ? in case of slow loading div message ...  
  mainContent.style.display = "block"
}
