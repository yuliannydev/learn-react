//** heroes está importado por default y puede ser llamada de la forma que uno quiera*/
//** owners es un export por nombre y como su manera lo dice, debe ser importado con el nomnbre del objeto en si*/
// import heroes, { owners } from "./data/heroes";
import heroes from "./data/heroes";

// console.log(owners);

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
// console.log(getHeroeById(3));

export const getName = (name) => {
  return heroes.find((heroe) => {
    return heroe.name === name;
  });
};
// console.log(getName("Spiderman"));

export const getHeroeByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};
// console.log(getHeroeByOwner("DC"));
