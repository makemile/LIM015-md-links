const fs = require('fs'); //nos devuelve un objeto, lo almacenamos dentro de una constante//
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');



//function the path exists?//
function existsPath (route){
  return fs.existsSync(route)

  }
  //function if path is an absolute path//

function absoluteIsPaht(pathRelative){
  return path.isAbsolute(pathRelative) === true ?relativePath : path.resolve(relativePath)}

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
  absoluteIsPaht
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


// search links//

function searchLinks(route){
    let arrayLinks = [];
    const renderer = new marked.Renderer();
    const ArrayGetMd = getFilesArray(route);
    ArrayGetMd.forEach((file) => {
    renderer.link = ( href, title, text) => {
      const objLinks = {
       href,
       text,
       file
      };
   //extration links
      arrayLinks.push(objLinks);

    };
    marked(readFile(file), { renderer });

    });
    return arrayLinks;
  };
// console.log(searchLinks('C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md'),95)

const validateLinks = (arrayLinks) => { //mis array de links href
  const arraysPromise = arrayLinks.map((element) => 
    fetch(element.href)
    .then((res) => {
      const obj = {
        href: element.href,
        text: element.text,
        file: element.file,
        status: res.status,
        message: res.status > 199  && res.status <= 399 ? 'ok' : 'fail',
      }
      return obj;
    })
    .catch((error) =>{
      const creatObj = {
        href: element.href,
        text: element.text,
        file: element.file,
        status: 'oh! hubo un problema con la solicitud.' + error,
        statusResponses: 'fail'
      };
      return creatObj;
      
    }));
    return Promise.all(arraysPromise)
     
  
}
  // saveArray = searchLinks('C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib')
  //        validateLinks(saveArray);//la estoy consumiendo

//funcion de mdlinks debe ir dentro de una promesa, aca (declararlas) diagrama flujo! mdlinks juntarlas
module.exports = {
  existsPath,
  absoluteIsPaht,
  convertAbsolute,
  isDirectory,
  readDirectory,
  isFile,
  extensionIsMd,
  readFile,
  getFilesArray,
  searchLinks,
  validateLinks
};