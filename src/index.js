const fs = require('fs'); //nos devuelve un objeto, lo almacenamos dentro de una constante//
const path = require('path');

//function readFile//

 fs.readFile('../README.md','utf-8',(error, data) =>{
   if (!error){
      console.log(data);
    }else{
    console.log(`error: ${error}`);
 }
 })


//functions extensions name//
 let extName = path.extname('/README.md');
   console.log(extName);

 //Comparing extensions from a list of file paths -example 1--//
 let path_Array = [
     "/c/users/KENGYA/Documents/Develop/LIM015-md-links/README.md",
     "/c/users/KENGYA/Documents/Develop/LIM015-md-links/hola.txt"
 ];

 path_Array.forEach(filePath => {
     if(path.extname(filePath) == '.txt') {
         console.log(filePath);
   }
 });

 //function readddir//
fs.readdir('../src', (error, files) => {
    if (error){
        throw error
    }
    console.log('finalizando lectura');
    console.log(files);
})

console.log('iniciando lectura');

// Joining 2 path-segments
const pathJoin= path.join('../lib', 'README.md', 'mdlinks.js');
console.log(pathJoin);
