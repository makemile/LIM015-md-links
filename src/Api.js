const fs = require('fs'); //nos devuelve un objeto, lo almacenamos dentro de una constante//
const path = require('path');
// const marked = require('marked');


//function the path exists?//
function existsPath (route){
  return fs.existsSync(route)

  }
  //function if path is an absolute path//

function absoluteIsPaht(pathRelative){
  return path.isAbsolute(pathRelative) ===true ?relativePath : path.resolve(relativePath)}

//function Convert relative to absolute path//
function convertAbsolute(pathAbsolute){
  return path.resolve(pathAbsolute)
}

//function if path is directory//
function isDirectory(path){
  return fs.statSync(path).isDirectory();
}

//readdir directory//
 function readDirectory(route) {
   return fs.readdirSync(route)
 }

 //validate is file?//
function isFile(route) {
  return fs.statSync(route).isFile();
  }

  //validate is file.md?//
function extensionIsMd(route){
  return path.extname(route) === '.md' ? true: false;
}

// read file.md//
function readFile(route){
  return fs.readFileSync(route).toString();
}

//recursive synchronous//
//es cuando una funcion se llama a si misma//
//1. condicion de parada//
//2. llamar a la funcion con un argumento distinto que nos permita llegar algun momento a la condicion de parada//
// let newArray = [];


function getFilesArray(route) {
  let mdArray = [];
if(isDirectory(route)) {
 readDirectory(route).forEach((element) => {
    const newPath = path.join(route, element);
  const fileArray = getFilesArray(path.resolve(newPath));
  mdArray = mdArray.concat(fileArray);
 });

}else if(!isDirectory(route) && extensionIsMd(route)){
   mdArray.push(route);
  }
  return mdArray;

};
 console.log(getFilesArray('C:/Users/KENGYA/Documents/Develop/LIM015-md-links/lib'),69);




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