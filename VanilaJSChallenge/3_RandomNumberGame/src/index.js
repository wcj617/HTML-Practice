const range = document.querySelector("#range");
const guessNumber = document.querySelector("#guessTheNumber");
const btn = document.querySelector("#btn");

const WinNumber = document.querySelector("#youwin");
const loseNumber = document.querySelector("#youlose");

const result = document.querySelector("#result");

function randomGame(event) {
  event.preventDefault();

  const rangeNum = Number(range.value);
  const userNum = Number(guessNumber.value);
  const randomNumber = Math.floor(Math.random() * rangeNum);

  WinNumber.innerText = `You chose: ${userNum},`;
  loseNumber.innerText = `the machine chose: ${randomNumber}.`;

  if (userNum === randomNumber) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}
btn.addEventListener("click", randomGame);
