const argv = require("./config/yargs.js").argv;
const { crearArchivo, listar } = require("./multiplicar/multiplicar");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(response => {
                console.log(`Tabla de multiplicar del ${ argv.base }`.red, "\n\n", response.green);
            })
            .catch(e => {
                console.log("ERROR!", e);
            })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(response => {
                console.log("Creado el archivo ", response);
            })
            .catch(e => {
                console.log("ERROR", e);
            })
        break;
    default:
        console.log("Parámetro inválido");

}