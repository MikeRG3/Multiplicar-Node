const opts = {
    base: {
        demand: true,
        alias: "b",

    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require("yargs")
    .command('listar', 'Imprime la tabla de multiplicar de la base deseada por consola', opts)
    .command('crear', 'Crea archivo con la tabla de multiplicar de la base deseada', opts)
    .help()
    .argv;


module.exports = {
    argv
}