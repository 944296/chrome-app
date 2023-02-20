const toDoForm = document.getElementById("todo-form");
const toDoInput= toDoForm.querySelector("input");//== document.queryselector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];//toDos의 이전 기록이 유지되도록 설정해야...const=>let

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//localstorage에 value를 string형태로 저장.
}

function deleteToDo(event) {//클릭 했을 때 지워야 할 대상.
    const li = event.target.parentElement;//click된 target(event된 target)의 부모인 "li"를 제거한다.
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));//클릭한 li.id와 다른 toDo는 남겨두고싶어.
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; //span의 텍스트 변경.
    const button = document.createElement("button");//button 만들고,
    button.innerText="❌"//button의 텍스트 변경. /이모지 넣는법: 윈도우 + .
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);//li>span = span을 li에 추가.
    li.appendChild(button);//li>span,button = span 뒤에 button
    toDoList.appendChild(li);//ul>li>span,button  = li를 ul에 추가.
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj ={ //storage네 저장된 array의 각 item들을 delete할 대상 정확히 지목하기위해서. object화
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);//toDos array에 newTodoObj를 push.
    paintToDo(newTodoObj);//화면에 표기.
    saveToDos();//localstorage에 저장.
}

toDoForm.addEventListener("submit", handleToDosubmit);

// function sayHello(item) { //js는 지금 처리되고있는 item을 알 수 있는 기능!
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);//localstorage에 저장된 value불러오기.

if(savedToDos !== null) {                       //localstorage에 저장된 value값이 있다면
    const parsedToDos = JSON.parse(saveToDos); //JSON.parse()=>배열 할 수 있는 array로 만들기.💥중요!💥
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item)); //array에 있는 각 item마다 function을 수행.
    toDos = parsedToDos; //이전에 저장되었던 todos들이 유지된 채...
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() {

}