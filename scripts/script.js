import { inputElement, buttonElement } from './constants/constants.js';
import { createList } from './components/createList.js';
import { todoListArr } from './constants/todoListArr.js';

const clickButtonToAddList = function() {
  const valueOfInputElement = inputElement.value.trim();

  if(valueOfInputElement.length >= 3) {
    todoListArr.push(valueOfInputElement);
    console.log(todoListArr);
  }

  inputElement.value = "";
  inputElement.focus();
};

buttonElement.addEventListener('click', clickButtonToAddList);