import { createStore } from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


// reducer 즉  countModifier는 data를 변화 시킬 수 있는 유일한 곳.
const countModifier = (count=0) => {
  // count = 0 initail state
  // count가 state 이다. 즉, 데이터의 상태를 나타내는 변수. 
  return count;
}
// store 즉, countStore는 data를 저장하는 곳. 
// createStore()라는 함수로 저장소를 만든다. 오직 이곳에서만 데이터를 저장할 수 있다.
const countStore = createStore(countModifier);

console.log(countStore.getState())



