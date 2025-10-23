const display = document.getElementById('mainContent');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

loadTemplate('template1')

btn1.addEventListener('click', () => loadTemplate('template1'));
btn2.addEventListener('click', () => loadTemplate('template2'));
btn3.addEventListener('click', () => loadTemplate('template3'));

function loadTemplate(id) {
      let temp = document.getElementById(id);
      let clon = temp.content.cloneNode(true);
      display.innerHTML=""
      display.appendChild(clon);
}