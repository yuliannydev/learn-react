import { getUser, getUsuarioActivo } from "../../src/base-tests/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe tener un objeto", () => {
    const data = {
      username: "yuliannydev",
      uid: "ABC123",
    };
    const user = getUser();
    expect(data).toEqual(user);
  });

  test("getUsuarioActivo debe tener un objecto: ", () => {
    const nombre = "yuliannydev";

    const data1 = {
      uid: "ABC567",
      username: nombre,
    };
    const userActivo = getUsuarioActivo(nombre);
    expect(data1).toEqual(userActivo);
  });
});
