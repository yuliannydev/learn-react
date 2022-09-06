import { getHeroeById } from "./08-multiples-import";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const response = getHeroeById(2);

//     //**Lo que se coloque en el resolve se pasara al then en su parametro */
//     resolve(response);
//   }, 2000);
// });

// promesa.then((response) => {
//   console.log("Resolve", response);
// });

const getHeroe = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = getHeroeById(id);
      response ? resolve(response) : reject("No se encontró el resultado");
    }, 2000);
  });
};
getHeroe(4)
  .then((response) => console.log("resolve", response))
  .catch((error) => console.warn(error));
