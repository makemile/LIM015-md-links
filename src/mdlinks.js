const functions = require('../src/Api');

const mdlinks = (path, options = {validate: false}) => {
    return new Promise ((resolve, reject) => {
        //validar que el path existe//
        if(!functions.existsPath(path)) {
            reject('la ruta no existe, es invalida')
            //extraer c/u de los links//
        }else{
            const viewLinks = functions.searchLinks(path);
            if(!(options.validate)){
                resolve (viewLinks);
            }
           else{
               const statLinks = functions.validateLinks(viewLinks);
               statLinks.then((res) => resolve(res));
           }
        }
    });
 };

 mdlinks('../lib').then((res) => console.log(res,40));
    module.exports = {mdlinks};
