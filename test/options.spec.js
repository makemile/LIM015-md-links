
const { statsTotalUnique, linkbroken} = require ('../src/options.js');

const input = [{
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
'C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md'
describe('total links, total unique links', () => {
    it('total de links, total unique links', () => {
        const output = `total : 5 \n Unique: 5`;
        expect(statsTotalUnique(input)).toEqual(output);
    });
});

describe('debe imprimir total link rotos', () => {
  it('total links rotos', () => {
    const   output = "Total Broken: 1";
    expect(linkbroken(input)).toEqual(output);
  })
})