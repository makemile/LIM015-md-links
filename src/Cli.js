#! /usr/bin/env node
const {mdlinks} = require ('./mdlinks.js');
const { statsTotalUnique, linkbroken} = require('../src/options.js')
const chalk = require('chalk');
const arguments = process.argv.slice(2);

 if(arguments.length === 1){
     mdlinks(arguments[0], {validate:false})
     .then(res =>  
        console.log(res))
     .catch(error => 
        console.log(error));
   
   
 }
     else if (arguments.length === 2){
        mdlinks(arguments[0], {validate:true})
        .then(res =>  console.log(res))
        .catch(error => console.log(error))
    
        
   } 


 console.log(process.argv, arguments,23);
 mdlinks(arguments[0], {validate:true}).then((res =>  console.log(res)),24);
