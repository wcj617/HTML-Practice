const bu = document.querySelector("button");

function HandleButton() {
  document.body.style.background = "purple";
}
if (bu){
    bu.addEventListener("click", HandleButton);
}

