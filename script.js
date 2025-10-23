// Elementos obtenidos por DOM
const display = document.getElementById('mainContent');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let datasets = {
      users:[
            { name: '', userId:'', mail: '', schedule: '', activeStatus: null },
      ],
      assets:[
            { name: '', assetTag: '', details: '', activeStatus: null },
      ],
      assignments:[
            { userId: '', assetTag: '', assignationStatus: null },
      ],
};

// Declaración de acciones 
display.appendChild(buildTable(datasets['users']));
btn1.addEventListener('click', () => {
      display.appendChild(buildTable(datasets['users']));
})
btn2.addEventListener('click', () => {
      display.appendChild(buildTable(datasets['assets']));
})
btn3.addEventListener('click', () => {
      display.appendChild(buildTable(datasets['assignments']));
})

// Funciones 
function loadTemplate(id) {
      let temp = document.getElementById(id);
      let clon = temp.content.cloneNode(true);
      display.innerHTML=""
      display.appendChild(clon);
}

function buildTable(data, buttonId) {
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
      const addButton = document.createElement('button');
      addButton.id = buttonId
      addButton.innerHTML = "Agregar nuevo"
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
      table.appendChild(addButton)
      return table;
}