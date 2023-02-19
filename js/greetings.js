const loginForm=document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 방어
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; //input의 value를 username이라는 변수에 저장
    localStorage.setItem("username", username); //local storage에 key와 value를 저장
    paintGreetings(username);//username을 받는 paintGreeting함수를 호출
}

function paintGreetings(username){ //username인자를 받는 함수
    greeting.innerText = `Hello ${username}`;//비어있는 h1요소 안에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);//hidden class를 지워서 h1을 보여주기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername); 
}

