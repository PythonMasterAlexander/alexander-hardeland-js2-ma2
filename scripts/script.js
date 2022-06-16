import { buttonElement, inputElement, listContainer, bookListContainer } from "./constants/constants.js";
import { createListForTodoList } from "./components/createListForTodoList.js";
import { toggleClickClassOnOff } from "./components/toggleClickClassOnOff.js";

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

  for(let i = 0; i < todoListArr.length; i++) {
    listContainer.innerHTML += createListForTodoList(todoListArr[i]);
  }

  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach(function(listItem) {
    listItem.addEventListener('click', toggleClickClassOnOff);
  });

  const listItemTrashBin = document.querySelectorAll('.fa-trash');
  listItemTrashBin.forEach(function(trashBin) {
    trashBin.addEventListener('click', removeItemFromList);
  });
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

//TODO Loop through the array and create one html list from each item in the array
let books = [
  {
    isbn: "1600506460320",
    title: "Great book"
  },
  {
    isbn: "1600506460373",
    title: "Ok book"
  },
  {
    isbn: "1600506460521",
    title: "Bad book"
  },
  {
    isbn: "1600506460456",
    title: "Terrible book"
  },
];

//TODO Ad a button or icon that removes the list item when you click it
//TODO When there is no more items display a message 

const removeBookListItem = function() {
  const bookRelease = event.target.dataset.item;

  console.log(bookRelease);
};

for(let i = 0; i < books.length; i++) {
  const bookReviewId = books[i].isbn; 
  const bookReview = books[i].title;

  let html = "";
  html = `
    <li>
      <span>Review: ${bookReview}</span>
      <button class="book-list__button" data-item="${bookReviewId}">Remove</button>
    </li  
  `;
  bookListContainer.innerHTML += html;

  const buttonsInList = document.querySelectorAll('.book-list__button');
  buttonsInList.forEach(function(button) {
    button.addEventListener('click', removeBookListItem);
  });
}