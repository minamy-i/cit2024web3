const express = require('express'); // Expressを読み込む
const app = express(); // Expressアプリを作成する
const port = 3000; // サーバーを起動するポート番号を指定する（3000番ポートを使用）
const staticFolder = 'citweb3tims';  // フォルダ名を変数に格納

// 静的ファイルを提供するディレクトリを設定
app.use(express.static(`${__dirname}/${staticFolder}`));

// ルートへのGETリクエストに対する処理
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/${staticFolder}/variant2.html`, (err) => {
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
