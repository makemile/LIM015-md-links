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
        

        
   
 }else if (arguments.includes('--help')){
     console.log(`
     ===============================================================================
                              ${chalk.blueBright.bold('INSTRUCCIONES') } 	      
     ===============================================================================
                             ${chalk.yellowBright('Hola, Bienvenido !!! ')}  
       Lee las siguientes opciones: 👀 
                                                                                    
       ${chalk.greenBright('--validate')} Imprime: [{href:\\text:\\file:\\status:\\message}]    
       ${chalk.magentaBright('--stats')} Imprime: Links Total: y Links Unicos:             
       ${chalk.cyanBright('--stats --validate')} Imprime: Links Total, Links Unicos y Links Rotos
       ${chalk.redBright.bold('En caso de no ingresar la opciones anteriores, impreme:[{href:\\text:\\file:]')} 
      =============================================================================== `)


 }else if (arguments.includes('--validate') &&  arguments.includes('--stats')){
    console.log('hola')
    mdlinks(arguments[0], {validate:true})
    .then((res) => {
       console.log(`${(statsTotalUnique(res, true))} \n${(linkbroken(res, true))}`);
})
.catch((res) => {
    console.log(res);
})

} else if (arguments.includes('--validate')) {
    console.log('hola1')
    mdlinks(arguments[0], {validate:true})
    .then((res =>  console.log(res)),24)
    .catch((res => console.log(res)));

}else if (arguments.includes('--stats')){
    console.log('hola2')
    mdlinks(arguments[0], {validate:true})
    .then((res) => {
        console.log(statsTotalUnique(res, true));

    })
    .catch((res) => console.log(res));
} else {
    console.log('el comando no es valido')
}