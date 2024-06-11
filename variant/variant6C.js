document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('table-container');
    
    // データを取得してテーブルを生成する
    fetch('/api/multiplication?size=12')
        .then(response => response.json())
        .then(data => {
            const table = document.createElement('table');
            data.table.forEach((row, rowIndex) => {
                const tr = document.createElement('tr');
                row.forEach((cell, cellIndex) => {
                    const td = document.createElement(rowIndex === 0 || cellIndex === 0 ? 'th' : 'td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });           
            container.appendChild(table);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            container.innerHTML = '<p>Error loading data. Please try again later.</p>'; // エラーメッセージをユーザーに表示
        });

    // クリックイベントリスナーを追加して、セルのハイライトを制御する
    container.addEventListener('click', function(event) {
        // すでにハイライトされているセルがあれば、ハイライトを解除
        document.querySelectorAll('.highlight').forEach(cell => {
            cell.classList.remove('highlight');
        });

        // クリックされた要素がtd要素の場合、ハイライトを適用
        if (event.target.tagName === 'TD') {
            const valueToHighlight = event.target.textContent; // クリックされたTDの内容
            const allCells = container.querySelectorAll('td'); // 全てのTD要素を取得
            allCells.forEach(cell => {
                if (cell.textContent === valueToHighlight) {
                    cell.classList.add('highlight'); // ハイライトクラスを適用
                }
            });
        }
    });
});

