import React from "react";
import { render } from "@testing-library/react";
import { Slide4 } from "./Slide4";

describe("Slide4", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Slide4 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
