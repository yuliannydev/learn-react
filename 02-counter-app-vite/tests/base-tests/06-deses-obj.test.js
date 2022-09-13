import { usContext } from "../../src/base-tests/06-deses-obj";

describe("Pruebas 06-deses-obj", () => {
  test("usContext", () => {
    const clave = 123;

    const data = {
      nombreClave: clave,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };
    const usConTest = usContext({ clave });
    expect(data).toEqual(usConTest);
  });
});
