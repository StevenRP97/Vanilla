// Elementos obtenidos por DOM
const display = document.getElementById('mainContent');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let users = [
      { name: 'Alice', age: 25, country: 'USA' },
      { name: 'Bob', age: 30, country: 'UK' },
      { name: 'Carlos', age: 22, country: 'Costa Rica' }
];

let products = [
      { product: 'Laptop', price: 1200, stock: 15 },
      { product: 'Phone', price: 800, stock: 40 },
      { product: 'Tablet', price: 600, stock: 20 }
];

let countries = [
      { country: 'France', capital: 'Paris', population: '67M' },
      { country: 'Japan', capital: 'Tokyo', population: '125M' },
      { country: 'Brazil', capital: 'Brasilia', population: '214M' }
];

// Declaración de acciones 
display.appendChild(buildTable(users));
btn1.addEventListener('click', () => {display.appendChild(buildTable(users));})
btn2.addEventListener('click', () => {display.appendChild(buildTable(products));})
btn3.addEventListener('click', () => {display.appendChild(buildTable(countries));})

// Funciones 
function loadTemplate(id) {
      let temp = document.getElementById(id);
      let clon = temp.content.cloneNode(true);
      display.innerHTML=""
      display.appendChild(clon);
}

function buildTable(data) {
      display.innerHTML=""
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');

      // Guard: if data is empty, just return a note
      if (data.length === 0) {
            table.textContent = 'No data available';
            return table;
      }

      // Extract column headers dynamically from the first object
      const headers = Object.keys(data[0]);
      const headerRow = document.createElement('tr');
      headers.forEach(h => {
            const th = document.createElement('th');
            th.textContent = h[0].toUpperCase() + h.slice(1); // capitalize
            headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);

      // Build table body
      data.forEach(item => {
            const row = document.createElement('tr');
            headers.forEach(h => {
                  const td = document.createElement('td');
                  td.textContent = item[h];
                  row.appendChild(td);
            });
            tbody.appendChild(row);
      });

      table.appendChild(thead);
      table.appendChild(tbody);
      return table;
}