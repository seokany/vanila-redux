import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// dispatch() 메서드를 통해서 action이 실행된다.
// action은 object 형태로만 받는다.

let addObject = {type: "Add"};
let minusObject = {type: "Minus"}

const countModifier = (count=0, action) => {
  console.log(count, action);
  if(addObject.type === "Add" ) {
    return count + 1;
  } else if (minusObject.type === "Minus") {
    return count - 1;
  } 
  return count;
}

const countStore = createStore(countModifier);

countStore.dispatch(addObject);
countStore.dispatch(addObject);
countStore.dispatch(addObject);
countStore.dispatch(minusObject);


console.log(countStore.getState())



