jest.mock('node-fetch');
const fetch = require('node-fetch');
const {validateLinks} = require('../src/Api.js');


test('test-mock estatus 200', () => {
  const obj = 
         {
             href: 'https://www.google.com',
             text: 'Google',
             file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md'
           };
         
         const objResult = 
           {
             href: 'https://www.google.com',
             text: 'Google',
             file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md',
             status: 200,
             message: 'ok'
           };
           fetch.mockReturnValue(Promise.resolve({status:200}));
         return validateLinks(obj).then((res) => {
           expect(res).toEqual(objResult);
         });
});