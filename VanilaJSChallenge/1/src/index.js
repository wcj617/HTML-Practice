// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const H = document.querySelector("h2");
const superEventHandler = {
  handlerMouseover: function mouseover() {
    H.innerText = "The mouse is here!";
    H.style.color = colors[0];
  },

  handlerMouseout: function mouseout() {
    H.innerHTML = "The mouse is gone!";
    H.style.color = colors[1];
  },
  handlerResize: function resize() {
    H.innerText = "You just resized!";
    H.style.color = colors[2];
  },
  handlerAuxclick: function auxclick() {
    H.innerText = "That was right click!";
    H.style.color = colors[4];
  }
};
H.addEventListener("mouseover", superEventHandler.handlerMouseover);

H.addEventListener("mouseout", superEventHandler.handlerMouseout);

window.addEventListener("resize", superEventHandler.handlerResize);

H.addEventListener("auxclick", superEventHandler.handlerAuxclick);
