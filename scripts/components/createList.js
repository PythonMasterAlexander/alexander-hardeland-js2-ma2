export const createList = function(inputInHtml) {
  let html = "";

  html = `
    <li>
      <span>${inputInHtml}</span>
    </li>
  `;

  return html;
};