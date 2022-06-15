export const createList = function(inputInHtml) {
  let html = "";

  html = `
    <li>
      <span>${inputInHtml}</span>
      <i class="fa-solid fa-trash" data-item="${inputInHtml}"></i>
    </li>
  `;

  return html;
};