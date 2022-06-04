const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();            
//console.log( argv );
crearArchivo( argv.b, argv.l, argv.h )
    .then( msg => console.log(msg.rainbow, 'creado..!'))
    .catch( err => console.log(err));

/*/* crearArchivoAsync( base )
    .then( msg => console.log(msg, 'creado..!'))
    .catch( err => console.log(err));
 */




