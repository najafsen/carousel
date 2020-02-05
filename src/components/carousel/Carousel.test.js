import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Carousel } from "./Carousel";
import { CarouselSlide } from "./CarouselSlide";
import { act } from "react-dom/test-utils";

describe("Carousel", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(
      <Carousel>
        <CarouselSlide>slide1</CarouselSlide>
        <CarouselSlide>slide2</CarouselSlide>
        <CarouselSlide>slide3</CarouselSlide>
      </Carousel>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("shows third slide after 10 seconds", () => {
    jest.useFakeTimers();

    const { queryByTestId } = render(
      <Carousel>
        <CarouselSlide>slide1</CarouselSlide>
        <CarouselSlide>slide2</CarouselSlide>
        <CarouselSlide>slide3</CarouselSlide>
        <CarouselSlide>slide4</CarouselSlide>
        <CarouselSlide>slide5</CarouselSlide>
      </Carousel>
    );
    expect(queryByTestId("carousel").children[0].style.marginLeft).toBe(
      "-000%"
    );
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    act(() => {
      jest.advanceTimersByTime(4000);
    });
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(queryByTestId("carousel").children[0].style.marginLeft).toBe(
      "-200%" // margin left -200% means that the third slide is visible
    );
  });

  test("shows forth slide after 10 seconds when interval prop is set to 3000", () => {
    jest.useFakeTimers();

    const { queryByTestId } = render(
      <Carousel interval={3000}>
        <CarouselSlide>slide1</CarouselSlide>
        <CarouselSlide>slide2</CarouselSlide>
        <CarouselSlide>slide3</CarouselSlide>
        <CarouselSlide>slide4</CarouselSlide>
        <CarouselSlide>slide5</CarouselSlide>
      </Carousel>
    );
    expect(queryByTestId("carousel").children[0].style.marginLeft).toBe(
      "-000%"
    );
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(queryByTestId("carousel").children[0].style.marginLeft).toBe(
      "-300%" // margin left -300% means that the forth slide is visible
    );
  });

  test("shows forth slide by clicking on the forth navigation button", () => {
    const { queryByTestId } = render(
      <Carousel>
        <CarouselSlide>slide1</CarouselSlide>
        <CarouselSlide>slide2</CarouselSlide>
        <CarouselSlide>slide3</CarouselSlide>
        <CarouselSlide>slide4</CarouselSlide>
        <CarouselSlide>slide5</CarouselSlide>
      </Carousel>
    );
    expect(queryByTestId("carousel").children[0].style.marginLeft).toBe(
      "-000%"
    );
    fireEvent.click(queryByTestId("navigation-buttons").children[3]);
    expect(queryByTestId("carousel").children[0].style.marginLeft).toBe(
      "-300%" // margin left -300% means that the forth slide is visible
    );
  });

  test("have initial transition and timingFunction styles", () => {
    const { queryByTestId } = render(
      <Carousel>
        <CarouselSlide>slide1</CarouselSlide>
        <CarouselSlide>slide2</CarouselSlide>
        <CarouselSlide>slide3</CarouselSlide>
        <CarouselSlide>slide4</CarouselSlide>
        <CarouselSlide>slide5</CarouselSlide>
      </Carousel>
    );
    for (let i = 0; i < 5; i++) {
      expect(queryByTestId("carousel").children[i].style.transition).toBe(
        "margin-left 500ms ease-in-out"
      );
    }
  });

  test("have given transition and timingFunction styles", () => {
    const { queryByTestId } = render(
      <Carousel transition={300} timingFunction="linear">
        <CarouselSlide>slide1</CarouselSlide>
        <CarouselSlide>slide2</CarouselSlide>
        <CarouselSlide>slide3</CarouselSlide>
        <CarouselSlide>slide4</CarouselSlide>
        <CarouselSlide>slide5</CarouselSlide>
      </Carousel>
    );
    for (let i = 0; i < 5; i++) {
      expect(queryByTestId("carousel").children[i].style.transition).toBe(
        "margin-left 300ms linear"
      );
    }
  });

  // More tests are required, but because of lack of time, I tried to write some samples including different scenarios
});
