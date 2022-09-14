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
    const dc = "DC";
    const marvel = "Marvel";
    const data_dc = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    const data_marvel = [
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ];
    const getDC = getHeroesByOwner(dc);
    const getMarvel = getHeroesByOwner(marvel);

    expect(getDC).toEqual(data_dc);
    expect(data_dc.length).toBe(3);

    expect(getMarvel).toEqual(data_marvel);
    expect(data_marvel.length).toBe(2);
  });
});
