import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-tests/08-imp-exp";

describe("08-imp-exp", () => {
  test("getHeroById", () => {
    const id = 1;
    const data_id = { id: 1, name: "Batman", owner: "DC" };
    const hero = getHeroeById(id);
    expect(hero).toEqual(data_id);
  });

  test("getHeroesByOwner", () => {
    const owner = "DC";
    const data = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    const getOwners = getHeroesByOwner(owner);
    expect(getOwners).toEqual(data);
  });
});
