const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginInput.addEventListener("click", onLoginBtnClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}
