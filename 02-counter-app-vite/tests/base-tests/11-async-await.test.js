import { getImagen } from "../../src/base-tests/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImage hace una llamado a una API y retorna un url de image", async () => {
    const url = await getImagen();
    // console.log(url);
    // console.log(typeof url);

    expect(typeof url).toBe("string");
    //or
    // expect(url).toEqual(expect.any(String));
  });
});
