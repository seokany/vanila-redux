// 1. id = add, minus span = count만들가.
const add = document.getElementById("add");
const minus = document.getElementById("minus");

const number = document.querySelector("span");

let count = 0;
number.innerHTML = 0;

const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  // console.log("Add count")
  count ++;
  // number.innerHTML = count;
  updateText();
}

const handleMinus = () => {
  // console.log("Minus count")
  count --;
  // number.innerHTML = count;
  updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

