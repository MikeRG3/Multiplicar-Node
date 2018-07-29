const fs = require("fs");




for (let j = 1; j < 10; j++) {
    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${j} x ${i} = ${j * i} \n`;
    }

    fs.writeFile(`./03 - bases/tablas/tabla-${j}.txt`, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}