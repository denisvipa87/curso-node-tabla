const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Base para crear la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Lista la tabla de multiplicar en pantalla',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Indica hasta que número realizar las multiplicaciones',
        default: 10
    })
    .check( (argv, options)=>{
        if( isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        }

        if( typeof(argv.listar) !== 'boolean'){
            throw 'El comando listar debe ser de tipo boolean';
        }

        if( isNaN(argv.listar)){
            throw 'El comando hasta debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv;