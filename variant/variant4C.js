document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/multiplication?size=12')  // sizeパラメータを追加してAPIを呼び出す
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('table-container');
            const table = document.createElement('table');
            data.table.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
            container.appendChild(table);
        })
        .catch(error => console.error('Error fetching data: ', error));
});


