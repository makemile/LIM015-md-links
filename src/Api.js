const fs = require('fs'); //nos devuelve un objeto, lo almacenamos dentro de una constante//
const path = require('path');


//function the path exists?//
function existsPath (route){
  return fs.existsSync(route)

  }
// console.log(existsPath('C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md'));

//function if path is an absolute path//

function absoluteIsPaht(pathRelative){
  return path.isAbsolute(pathRelative)
}

//function Convert relative to absolute path//
function convertAbsolute(pathAbsolute){
  return path.resolve(pathAbsolute)
}

//function if path is directory//
function isDirectory(path){
  return fs.statSync(path).isDirectory();//statsync
}

//readdir directory//
 function readDirectory(route) {
   return fs.readdirSync(route)
 }

 //validate is file?//
function isFile(route) {
  return fs.statSync(route).isFile();
  }

// recursive synchronous//
//es cuando una funcion se llama a si misma//
//1. condicion de parada//
//2. llamar a la funcion con un argumento distinto que nos permita llegar algun momento a la condicion de parada//


function getFilesArray(route) {
const newArray = [];
if(isDirectory(route)) {
  readDirectory(route).forEach((element) => {
    // console.log(path.resolve(route + '/' + element));
   path.join(route + '/' + element);
const ArrayElement= getFilesArray(path.resolve(route + '/' + element));
ArrayElement.concat(newArray);//guardar este valor que devuelva con una const , hya qe juntarlo con nuestro new array
});

}else{
   newArray.push(route)
  }

 return newArray;
  
};

console.log(getFilesArray('C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib'));

//validate is file.md?//
function extensionIsMd(route){
  return path.extname(route) === '.md' ? true: false;
}

// read file.md//
function readFile(route){
  return fs.readFileSync(route).toString();
}





module.exports = {
  existsPath,
  absoluteIsPaht,
  convertAbsolute,
  isDirectory,
  readDirectory,
  isFile,
  extensionIsMd,
  readFile,
  getFilesArray
};