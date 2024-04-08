// JavaScriptでテーブルを生成する関数
function createMultiplicationTable(rows, columns) {
    var table = document.getElementById("multiplication-table");

    for (var i = 1; i <= rows; i++) {
        var row = document.createElement("tr");

        for (var j = 1; j <= columns; j++) {
            var cell = document.createElement("td");

            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// 関数を呼び出してテーブルを生成
let rows = 12;
let columns = 12;
createMultiplicationTable(rows, columns);