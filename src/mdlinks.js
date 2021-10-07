const functions = require("../src/Api");

const mdlinks = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    //validar que el path existe//
    if (!functions.existsPath(path)) {
        resolve('la ruta no existe, es invalida');
      //extraer c/u de los links//
    } else {
      if (options.validate == true) {
        resolve(functions.validateLinks(functions.searchLinks(path)));
      } else {
        resolve(functions.searchLinks(path));
      }
    }
  });
};

module.exports = { mdlinks };
