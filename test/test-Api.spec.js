const { objectTypeAnnotation } = require("@babel/types");
const {
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
  validateLinks,
} = require("../src/Api.js");

//function the path exists?//
describe("si existe la path", () => {
  test("validar si es un función", () => {
    expect(typeof existsPath).toBe("function"); //typeof para averiguar y comprobar el tipo de dato o valor//
  });

  it("retorna un bolean, si existe la ruta ", () => {
    expect(
      existsPath(
        `C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md`
      )
    ).toBe(true);
  });

  it("retorna un bolean, si la ruta no existe", () => {
    expect(existsPath(`./Documents/functions`)).toBe(false);
  });
});
// 
describe("si path es una rutal absoluta", () => {
  test("validar si es una funcion", () => {
    expect(typeof absoluteIsPaht).toBe("function");
  });
  it("retorna un bolean, si la ruta es absoluta", () => {
    const pathAbsolut = "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\prueba.txt";
    const result = "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\prueba.txt";
    expect(
      absoluteIsPaht(
        (pathAbsolut)
      )
    ).toBe(result);
  });
  it("sino es absoluta, convertir a relativa", () => {
    const relative = "\\lib\\prueba.txt";
    const absoluta = "\\lib\\prueba.txt";
    expect(
      absoluteIsPaht(
        (relative)
      )
    ).toBe(absoluta);
  });
});

//function if path is an absolute path//
describe("si path es absoluta", () => {
  test("validar si es un función", () => {
    expect(typeof absoluteIsPaht).toBe("function");
  });
  //function if path is an absolute path//
  it("retorna un bolean, si la ruta relativa convierte en absoluta", () => {
    expect(convertAbsolute("lib/Recursos/recursos2/Dos_links.md")).toEqual(
      `C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\recursos2\\Dos_links.md`
    );
  });
});

//function if path is directory//
describe("si path es un directorio", () => {
  test("validar si es un función", () => {
    expect(typeof isDirectory).toBe("function");
  });

  it("retorna un bolean, si path es un directorio", () => {
    expect(isDirectory(`C:\\Users\\KENGYA\\Documents`)).toBe(true);
  });

  it("retorna un bolean, si path no es un archivo", () => {
    expect(
      isDirectory(
        `C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md`
      )
    ).toBe(false);
  });
});

//function readDirectory//
describe("si path tiene archivos anidados", () => {
  test("validar si es una funcion", () => {
    expect(typeof readDirectory).toBe("function");
  });
});

//function validate is fiel?//
describe("validar si es un archivo", () => {
  test("validar si es una funcion", () => {
    expect(typeof isFile).toBe("function");
  });
  it("restorna un bolean, si es un archivo", () => {
    expect(
      isFile(
        "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md"
      )
    ).toBe(true);
  });
  it("retorna un bolean, si no es un archivo", () => {
    expect(isFile("C:\\Users\\KENGYA\\Documents")).toBe(false);
  });
});

//function isMd//
describe("validar si es un archivo con extension Md", () => {
  test("validar si es una funcion", () => {
    expect(typeof extensionIsMd).toBe("function");
  });
  it("retorna un bolean, si es un archivo con extension md", () => {
    expect(
      extensionIsMd(
        "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md"
      )
    ).toBe(true);
  });
  it("retorna un bolean, si no es un archivo con extension md", () => {
    expect(
      extensionIsMd(
        "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\prueba.txt"
      )
    ).toBe(false);
  });
});

// read file.md//
describe("se puede leer el archivo md", () => {
  test("validar si es una funcion", () => {
    expect(typeof readFile).toBe("function");
  });
  it("se puede leer el archivo md", () => {
    expect(
      readFile(
        "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md"
      )
    );
  });
});

describe("nos retorne un array de archivo md", () => {
  test("validar si es una funcion", () => {
    expect(typeof getFilesArray).toBe("function");
  });
});

describe("extrae en un array rutas de archivos .md", () => {
  it("retorna un array con extension de archivo md", () => {
    const arrayMd = [
      "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md",
      "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\link_no_encontrado.md",
      "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md",
      "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba2.md",
      "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba3.md",
      "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
    ];
    expect(
      getFilesArray("C:/Users/KENGYA/Documents/Develop/LIM015-md-links/lib")
    ).toEqual(arrayMd);
  });
});

describe("extraer links de los archivos .md", () => {
  test("validar si es una función", () => {
    expect(typeof searchLinks).toBe("function");
  });
  it("nos retorna un array de links", () => {
    const arrayLinks = [
      {
        href: "https://www.figma.com/blog/1",
        text: "figma",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\linkroto.md",
      },
      {
        href: "https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia",
        text: "linkfail",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\link_no_encontrado.md",
      },

      {
        href: "https://www.google.com",
        text: "Google",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\Recursos\\Prueba1.md",
      },
      {
        href: "https://es.wikipedia.org/wiki/Markdown",
        text: "Markdown",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "mdlinks",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
      },
      {
        href: "https://jestjs.io/es-ES/docs/manual-mocks",
        text: "mocks",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
      },
      
    ];
    expect(
      searchLinks("C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib")
    ).toEqual(arrayLinks);
  });
});

describe("petición http", () => {
  test("debería ser una funcion", () => {
    expect(typeof validateLinks).toBe("function");
  });
  it("retorna un array de ibjeto con 3 propiedades", ()=> {
    const objeto = [{
      href: "https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia",
      text: "linkfail",
      file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\link_no_encontrado.md",
    }];
    
    const objResult = [{
      href: "https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia",
      text: "linkfail",
      file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\link_no_encontrado.md",
      status: 410,
      message: "fail",
    }]
    return expect(validateLinks(objeto)).resolves.toEqual(objResult);
  })

describe("extraer los links, mostrar su status y propiedades", () => {
  test("debería ser una funcion", () => {
    expect(typeof validateLinks).toBe("function");
  });
  it('catch', ()=> {
    const objeto = [{
    href:  "titulo1",
    text:  "titulo2",
    file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\link_no_encontrado.md",
    }];
    
    const objResult = [{
      href: "titulo1",
      text: "titulo2",
      file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\link_no_encontrado.md",
      status: "oh! hubo un problema con la solicitud.TypeError: Only absolute URLs are supported",
      statusResponses: 'fail'
    }]
    return expect(validateLinks(objeto)).resolves.toEqual(objResult);
  })
})
})