describe("Una prueba de ejemplo", () => {
  test("Mi primer test", () => {
    //1. Inicialización
    const message1 = "Hello World";
    //2. Estimulo
    const message2 = message1.trim();
    //3. Assertion
    expect(message1).toBe(message2);
  });
});
