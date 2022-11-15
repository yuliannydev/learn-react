import React from "react";
import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("testing FirstApp", () => {
  const title = 'Hola mundo';
  test("Debe hacer match con el Snapshot", () => {
    /*renderizado del componente*/
    const { container } = render(<FirstApp/>);
    /* Capture al componente */
    expect(container).toMatchSnapshot();
  });

  test('Debe contener el texto "Hola mundo"', () => { 

    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
   })

  test('Debe contener el texto "Hola mundo" en un h1', () => { 

    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
   })

});
