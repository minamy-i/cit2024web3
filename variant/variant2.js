// JavaScriptでテーブルを生成する関数
function createMultiplicationTable(rows, columns) {
    var table = document.getElementById("multiplication-table");

    for (var i = 0; i <= rows; i++) {
        var row = document.createElement("tr");
        var cell = document.createElement("td");
        var k;
        if(i == 0) {
            cell.textContent = "X";
            k = 1;
        } else {
            cell.textContent = i;
            k = i;
        }
        row.appendChild(cell);
        for (var j = 1; j <= columns; j++) {
            var cell = document.createElement("td");
            cell.textContent = k * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// 関数を呼び出してテーブルを生成
let rows = 12;
let columns = 12;
createMultiplicationTable(rows, columns);