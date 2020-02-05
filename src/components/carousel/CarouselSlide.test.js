import React from "react";
import { render } from "@testing-library/react";
import { CarouselSlide } from "./CarouselSlide";

test("matches snapshot", () => {
  const { asFragment } = render(<CarouselSlide>content</CarouselSlide>);
  expect(asFragment()).toMatchSnapshot();
});
