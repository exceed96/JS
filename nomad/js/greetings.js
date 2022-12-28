const LoginInput = document.querySelector("#Login-Form input");
const LoginForm = document.querySelector("#Login-Form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "UserName";
const SaveUserName = localStorage.getItem(USERNAME_KEY);

function OnLoginSubmit(event) {
    event.preventDefault();
    const UserName = LoginInput.value;
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, UserName);
    PaintGreetings(UserName);
}

function PaintGreetings(UserName) {
    greeting.innerHTML = `Hello ${UserName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

LoginForm.addEventListener("submit", OnLoginSubmit);

if (SaveUserName === null) {
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", OnLoginSubmit);
} else {
    PaintGreetings(SaveUserName);
}