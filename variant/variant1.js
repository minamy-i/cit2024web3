function variant1( ){
    let n = 12;
    const  x = "X";
   
    for (let i = 0; i <= n; i++) {
        let row;
        let k;
        if (i == 0) {
            row = x+ `\t`;
            k = 1;
        } else {
            row = `${i}\t`;
            k = i;
        }
        for (let j = 1; j <= n; j++ ) {
            row += `${k * j}\t`;
        }
        console.log(row);
        }
}

variant1();