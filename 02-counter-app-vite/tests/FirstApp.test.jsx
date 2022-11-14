import React from "react";
import { render } from "@testing-library/react";
import FirstApp from "../src/FirstApp";

describe("testing FirstApp", () => {
  test("Debe hacer match con el Snapshot", () => {
    /*renderizado del componente*/
    render(<FirstApp />);

  });
});
