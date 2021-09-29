const backgroundColor = document.querySelector("body");

function resizeHandler() {
  const windWidth = window.innerWidth;
  if (windWidth < 400) {
    backgroundColor.classList.remove("purple");
    backgroundColor.classList.add("blue");
  } else if (windWidth >= 400 && windWidth < 800) {
    backgroundColor.classList.remove("yellow");
    backgroundColor.classList.remove("blue");
    backgroundColor.classList.add("purple");
  } else if (windWidth >= 800) {
    backgroundColor.classList.remove("purple");
    backgroundColor.classList.add("yellow");
  }
}

window.addEventListener("resize", resizeHandler);
