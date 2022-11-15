/** Ejemplo para entender useState */
const onePiece = ["Luffy", "Soro", "Sanji"];
console.log(onePiece);

const [p1] = onePiece;
console.log(p1);

/** Obteniendo el segundo elemento */
const [, p2] = onePiece;
console.log(p2);

/** Obteniendo el tercer elemento */
const [, , p3] = onePiece;
console.log(p3);

/** Guardar todos los elementos excepto el primero en una variable */
const [, ...all] = onePiece;
console.log(all);

//** Desestructuracion de arreglos */

const data = () => {
  return ["ABC", 123];
};

const [letras, numeros] = data();
console.log(letras);
console.log(numeros);

//** Desestructuracion en un ejemplo de useState */

const UseState = (nombre) => {
  return [
    nombre,
    () => {
      console.log(`Hello world!, ${nombre}`);
    },
  ];
};

const [nombre, setNombre] = UseState("Nombre");
console.log(nombre);
setNombre();
