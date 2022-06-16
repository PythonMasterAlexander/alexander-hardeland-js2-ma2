export const createHtml = function(item) {
  let html = "";

  html = `
    <li>
      <span class="list-item">${item}</span>
      <i class="fa fa-trash" data-item="${item}"></i>
    </li>  
  `;

  return html;
};