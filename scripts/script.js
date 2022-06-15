import { buttonElement, inputElement, listContainer } from "./constants/constants.js";

/* -This variable must be declared here and not be a import from another file. 
Doing so will turn the variable into 'read-only' and will throw an error */
let todoListArr = [];

//TODO Refactor the code into smaller bits
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
  listItems.forEach(function(listItem) {
    listItem.addEventListener('click', toggleClickClassOnOff);
  });

  const listItemTrashBin = document.querySelectorAll('.fa-trash');
  listItemTrashBin.forEach(function(trashBin) {
    trashBin.addEventListener('click', removeItemFromList);
  });
};

const toggleClickClassOnOff = function() {
  event.target.classList.toggle('clickClass');
};

const removeItemFromList = function() {
  let deleteItemFromList = event.target.dataset.item;

  const removedListItemInArr = todoListArr.filter(function(listItem) {
    if(deleteItemFromList !== listItem) {
      return true;
    }
  });

  todoListArr = removedListItemInArr;
  generateHtmlForList();
};

//TODO Save the list and retrieve it from local storage
buttonElement.addEventListener('click', addItemsToList);