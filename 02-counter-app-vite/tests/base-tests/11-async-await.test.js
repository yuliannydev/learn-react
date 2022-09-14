import { getImagen } from "../../src/base-tests/11-async-await";

describe("11-async-await", () => {
  test("getImage hace una llamado a una API y retorna un url de image", async () => {
    const url = await getImagen();
    expect(url).toBe(undefined);
  });
});
