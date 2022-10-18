const colorButton = document.querySelector(".colorButton")
// btnEventListener.addEventListener("click", changeBackground)

function changeBgToRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
    document.body.style.backgroundColor = `#${randomColor}`;
  }
  
  const eventListenerButton = document.querySelector(".colorButton");
  eventListenerButton.addEventListener("click", changeBgToRandom);