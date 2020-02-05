import React from "react";
import { render } from "@testing-library/react";
import { Slide3 } from "./Slide3";

describe("Slide3", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Slide3 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
