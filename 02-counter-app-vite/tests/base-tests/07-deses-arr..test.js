import { useState } from "react";
import { retornaArreglo, usState } from "../../src/base-tests/07-deses-arr";

describe("07-deses-arr", () => {
  test("retornaArreglo", () => {
    const [letters, numbers] = retornaArreglo();

    // expect(letters).toBe("ABC");
    // expect(numbers).toBe(123);

    expect(letters).toEqual(expect.any(String));
    expect(numbers).toEqual(expect.any(Number));
  });

  //** useState */
  test("usState", () => {
    const [nombre, setNombre] = usState("Goku");

    expect(nombre).toEqual(expect.any(String));
    expect(setNombre).toEqual(expect.any(Function));
  });
});
