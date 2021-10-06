const {mdlinks} = require ('./mdlinks.js');

const ArrayObj = [{
  href: 'https://www.figma.com/blog/1',
   text: 'figma',
   file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md',
   status: 404,
   message: 'fail'
 },
 {
   href: 'https://www.google.com',
   text: 'Google',
   file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md',
   status: 200,
   message: 'ok'
 },
 {
   href: 'https://es.wikipedia.org/wiki/Markdown',
   text: 'Markdown',
   file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md',
   status: 200,
   message: 'ok'
 },
 {
   href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
   text: 'mdlinks',
   file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md',
   status: 200,
   message: 'ok'
 },
 {
   href: 'https://jestjs.io/es-ES/docs/manual-mocks',
   text: 'mocks',
   file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md',
   status: 200,
   message: 'ok'
}];


//totalunique//
const statsTotalUnique = ArrayObj =>  {

const statsTotal = ArrayObj.length;
const statsUnique = new Set (ArrayObj.map((element) => element.href));
console.log(statsUnique);
const stats = `total : ${statsTotal} \n Unique: ${statsUnique.size}` 


return stats;
} 

//stats broken//
const linkbroken = ArrayObj => {
 const linksBroken = ArrayObj.filter((element => element.status >= 400));
 const statslinksBroken = `Total Broken: ${linksBroken.length}`;

  return statslinksBroken;
}

  // console.log(statsTotalUnique(ArrayObj),26);
  // console.log(linkbroken(ArrayObj),64)

module.exports = {
  statsTotalUnique,
  linkbroken
}