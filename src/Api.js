const fs = require('fs'); //nos devuelve un objeto, lo almacenamos dentro de una constante//
const path = require('path');



//function the path exists?//
function existsPath (route){
 return fs.existsSync(route)
}

//function if path is an absolute path//

function absoluteIsPaht(pathRelative){
  return path.isAbsolute(pathRelative)
}

//function Convert relative to absolute path//
function convertAbsolute(pathAbsolute){
  return path.resolve(pathAbsolute)
}
console.log(convertAbsolute);

//function if path is directory//
function stats(path){
  return fs.existsSync(path)
}

// recursive synchronous//
//es cuando una funcion se llama a si misma//
//1. condicion de parada//
//2. llamar a la funcion con un argumento distinto que nos permita llegar algun momento a la condicion de parada// 

//readdir//
function getDirectory(directory) {
  return fs.readdirSync(directory)
}

//new array readdir//
function getDirAndFiel(file){
  //new array of file, path//
  return getDirectory(file).map(element => 
    //join file and path//
    path.join(file, element));
  };






module.exports = {
  existsPath,
  absoluteIsPaht,
  convertAbsolute,
  stats,
  getDirectory,
  getDirAndFiel
};