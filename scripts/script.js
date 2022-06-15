import { buttonElement, inputElement, listContainer } from "./constants/constants.js";
import { todoListArr } from "./constants/todoListArr.js";

const addItemsToList = function() {
  let itemsToAddToList = inputElement.value.trim();

  if(itemsToAddToList.length >= 3) {
    todoListArr.push(itemsToAddToList);
    generateHtmlForList();
    inputElement.value = "";
    inputElement.focus();
  }
};

const generateHtmlForList = function() {
  listContainer.innerHTML = "";

  todoListArr.forEach(function(listItem) {
    let html = "";

    html = `
      <li>
        <span class="list-item">${listItem}</span>
        <i class="fa fa-trash" data-item="${listItem}"></i>
      </li>  
    `;
    listContainer.innerHTML += html;
  });

  const listItems = document.querySelectorAll('.list-item');

  listItems.forEach(function(item) {
    item.addEventListener('click', toggleClickClassOnOff);
  });
};

const toggleClickClassOnOff = function() {
  event.target.classList.toggle('clickClass');
};

buttonElement.addEventListener('click', addItemsToList);