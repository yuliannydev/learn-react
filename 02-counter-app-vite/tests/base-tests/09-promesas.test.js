import { getHeroeByIdAsync } from "../../src/base-tests/09-promesas";

describe("09-promesas", () => {
  test("getHeroByIdAsync debe retornar un heroe", (done) => {
    const id = 2;
    const spiderman = { id: 2, name: "Spiderman", owner: "Marvel" };
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(spiderman);
      done();
    });
  });

  test("getHeroByIdAsync debe retornar el error", (done) => {
    const id = 30;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe #${id}`);
      done();
    });
  });
});
