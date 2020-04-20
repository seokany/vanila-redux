const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createTodo = todo => {
  const li = document.createElement("li");
  li.innerText = todo;
  ul.appendChild(li);
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  if(toDo === ""){
    alert("Do anything")
  } else if(toDo) {
    createTodo(toDo)
  }
  // createTodo(toDo);
};

form.addEventListener("submit", onSubmit);