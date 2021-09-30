const functions = require('../src/Api');

const mdlinks = (path, options = {}) => {
    return new Promise ( (resolve, reject) => {
        //validar que el path existe//
        if(!functions.existsPath(path)) {
            const err = 'invalid path';
            resolve(err)
            reject('la ruta no existe, es invalida')
            //extraer c/u de los links//
        }else{
            if(options.validate){
               resolve (functions.validateLinks(functions.searchLinks(path)))
            }
           else{
               resolve(functions.searchLinks(path));
           }
        }
    });
 };

mdlinks('C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md', {validate : false}).then((res) => { //crear una promesa global//
    console.log(res,23);
   })
   .catch((error) =>{
    console.log(error);
    }); //map debo construir un array de prom
    module.exports = {mdlinks};