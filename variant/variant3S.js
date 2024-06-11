const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const staticFolder = 'citweb3tims'; // フォルダ名を変数に格納
const fileName = 'variant3.html'; // ファイル名を変数に格納

// 静的ファイルを提供するディレクトリを設定
app.use(express.static(staticFolder));

// ルートへのGETリクエストに対する処理
app.get('/', (req, res) => {
  const filePath = path.join(staticFolder, fileName);
  console.log(`Serving file: ${filePath}`); // ファイルパスをログに出力
  res.sendFile(filePath, { root: '.' }, (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

// サーバーを起動する
app.listen(port, () => {
  console.log(`サーバーが http://localhost:${port} で起動しました。`);
});





