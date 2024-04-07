function variant1( ){
    let n = 12;
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++ ) {
            row += `${i * j}\t`;
        }
        console.log(row);
        }
}

variant1();