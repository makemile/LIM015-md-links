const {
existsPath,
absoluteIsPaht,
convertAbsolute,
stats,
getDirAndFiel
} = require('../src/Api.js');

//function the path exists?//
describe('si existe la path', () => {
   test('validar si es un función', () => {
     expect(typeof existsPath).toBe('function'); //typeof para averiguar y comprobar el tipo de dato o valor//
   });

   it('retorna un bolean, si existe la ruta ', () => {
    expect(existsPath(`C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md`)).toBe(true);
  });

   it('retorna un bolean, si la ruta no existe', () => {
       expect(existsPath(`./Documents/functions`)).toBe(false);
   });
 });

//function if path is an absolute path//
describe('si path es absoluta', () => {
   test('validar si es un función', () => {
     expect(typeof absoluteIsPaht).toBe('function');
   });
//function if path is an absolute path//
   it('retorna un bolean, si la ruta relativa convierte en absoluta', () => {
expect(convertAbsolute('lib/Recursos/recursos2/Dos links.md')).toEqual(`C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\recursos2\\Dos links.md`);
   });
 });

 //function if path is directory//
 describe('si path es un directorio', () => {
   test('validar si es un función', () => {
     expect(typeof stats).toBe('function');
   });

   it('retorna un bolean, si path es un directorio', () => {
    expect(stats(`C:\\Users\\KENGYA\\Documents`)).toBe(true);
 });

 it('retorna un bolean, si path no es un directorio', () => {
  expect(stats(`/lib`)).toBe(false);

   });
});

describe('si path tiene archivos anidados', () => {
  test('validar si es una funcion', () => {
    expect(typeof getDirAndFiel).toBe('function');
  });
});
