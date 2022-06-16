export const createListForTodoList = function(inputInHtml) {
  let html = "";

  html = `
    <li>
      <span class="list-item">${inputInHtml}</span>
      <i class="fa-solid fa-trash" data-item="${inputInHtml}"></i>
    </li>
  `;

  return html;
};