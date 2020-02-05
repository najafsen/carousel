import React from "react";
import { render } from "@testing-library/react";
import { Main } from "./Main";

describe("Main", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });
});
