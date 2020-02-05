import React from "react";
import { render } from "@testing-library/react";
import { Slide1 } from "./Slide1";

describe("Slide1", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Slide1 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
