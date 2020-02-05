import React from "react";
import { render } from "@testing-library/react";
import { Slide5 } from "./Slide5";

describe("Slide5", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Slide5 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
