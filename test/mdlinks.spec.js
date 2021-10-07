const { mdlinks } = require("../src/mdlinks");

describe("test mdlinks", () => {
  test("mdlinks es una función", () => {
    expect(typeof mdlinks).toBe("function");
  });

  it("si es false , debería retornar un array con sus 3 propiedades", () => {
    const obj = [
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
    return expect(
      mdlinks(
        "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2",
        { validate: false }
      )
    ).resolves.toEqual(obj);
  });

  it("si es true, deberia retornar un array con sus 5 propiedades", () => {
    const obj = [
      {
        href: "https://es.wikipedia.org/wiki/Markdown",
        text: "Markdown",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
        status: 200,
        message: "ok",
      },
      {
        href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg",
        text: "mdlinks",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
        status: 200,
        message: "ok",
      },
      {
        href: "https://jestjs.io/es-ES/docs/manual-mocks",
        text: "mocks",
        file: "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2\\Dos_links.md",
        status: 200,
        message: "ok",
      },
    ];
    return expect(
      mdlinks(
        "C:\\Users\\KENGYA\\Documents\\Develop\\LIM015-md-links\\lib\\recursos2",
        { validate: true }
      )
    ).resolves.toEqual(obj);
  });
});
