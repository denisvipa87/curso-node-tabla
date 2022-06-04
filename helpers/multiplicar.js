const fs = require('fs');
const colors = require('colors');


const crearArchivo = ( base, listar, hasta ) => {
    salida = '**********************\n'.green;
    salida += `     TABLA DEL ${ colors.blue( base ) }\n`.green;
    salida += '**********************\n'.green;
    
    
    for(let i = 1; i <= hasta; i++){
        salida += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
    }  
    
    return new Promise((resolve, reject)=>{
        try {       
            if ( listar)
            console.log(salida);

            fs.writeFileSync(`salidas/tabla-${ base}.txt`, salida);
            resolve(`tabla-${ base }.txt`);
        } catch (error) {
            reject(error);
        }
    });    
}

/* const crearArchivoAsync = async ( base ) => {
    salida = '**********************\n';
    salida += `     TABLA DEL ${ base }\n`;
    salida += '**********************\n';
    
    
    for(let i = 1; i <= 10; i++){
        salida += `${ base } x ${ i } = ${ base * i }\n`;
    }  
    
    try {
        console.clear();
        fs.writeFileSync(`tablas/tabla-${ base}.txt`, salida);
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }   
} */

module.exports = {
    crearArchivo
}