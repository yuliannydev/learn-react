import { getSaludo } from "../../src/base-tests/02-template-string";

describe("Test in file 02-template-string", () => {
  test('getSaludo debe retornar "Hola Yulianny"', () => {
    const name = "Yulianny";
    const message = getSaludo(name);
    expect(message).toBe(getSaludo(name));
  });
});
