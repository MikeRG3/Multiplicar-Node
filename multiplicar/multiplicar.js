const fs = require("fs");

let data = '';



// let crearArchivo = async(base) => {

//     for (let i = 1; i <= 10; i++) {
//         data += `${base} x ${i} = ${base * i} \n`;
//     }

//     fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
//         console.log(err);

//         return `tabla-${base}.txt`;
//     });
// }
let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un número");
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        resolve(data);
    })
}

let crearArchivo = (base, limite = 10) => { //valor de limite por defecto = 10
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("No es un número");
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base} hasta ${limite}.txt`, data, (err) => {
            if (err) reject(err);

            resolve(`tabla del ${base} hasta ${limite}.txt`.red);
        });
    })
}

module.exports = {
    crearArchivo,
    listar
}