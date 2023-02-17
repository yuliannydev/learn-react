import { getGifs } from "../../src/helpers/getGifs";

describe("getGifs", () => {
  test("Return an array gifs", async () => {
    const gifs = await getGifs("Hunter X Hunter");
    //console.log(typeof gifts);
    expect(gifs.length).toBeGreaterThan(0);

    //Evaluando exactamente una posicion del array
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      image_url: expect.any(String),
    });
  });
});
