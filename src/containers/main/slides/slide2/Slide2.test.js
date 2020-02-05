import React from "react";
import { render } from "@testing-library/react";
import { Slide2 } from "./Slide2";

describe("Slide2", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Slide2 />);
    expect(asFragment()).toMatchSnapshot();
  });
});
