jest.mock('node-fetch');
const fetch = require('node-fetch');
const {validateLinks} = require('../src/Api.js');


test('estatus 200', () => {
      const obj = [{
        href: 'https://www.google.com',
        text: 'Google',
        file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md'
        }];
         
         const objResult =  [{
          href: 'https://www.google.com',
          text: 'Google',
          file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md',
          status: 200,
          message: 'ok'
        }];
           
           fetch.mockReturnValue(Promise.resolve({status:200}));
         return validateLinks(obj).then((res) => {
           expect(res).toEqual(objResult);
         });
});

test('estatus 400', () => {
    const obj = [{
      href: 'https://www.figma.com/blog/1',
      text: 'figma',
      file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md',
    }];

    const objResult = [{
      href: 'https://www.figma.com/blog/1',
      text: 'figma',
      file: 'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md',
      status: 404,
      message: 'fail'
    }];
    fetch.mockReturnValue(Promise.resolve({status:404}));
         return validateLinks(obj).then((res) => {
           expect(res).toEqual(objResult);
         });
})

