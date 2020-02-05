import React from "react";
import "./Main.scss";
import { CarouselSlide } from "../../components/carousel/CarouselSlide";
import { Carousel } from "../../components/carousel/Carousel";
import { Slide1 } from "./slides/slide1/Slide1";
import { Slide2 } from "./slides/slide2/Slide2";
import { Slide3 } from "./slides/slide3/Slide3";
import { Slide4 } from "./slides/slide4/Slide4";
import { Slide5 } from "./slides/slide5/Slide5";

export const Main = () => {
  return (
    <div className="main-component">
      <div className="header-container"></div>
      <div className="carousel-container">
        <Carousel>
          <CarouselSlide>
            <Slide1 />
          </CarouselSlide>
          <CarouselSlide>
            <Slide2 />
          </CarouselSlide>
          <CarouselSlide>
            <Slide3 />
          </CarouselSlide>
          <CarouselSlide>
            <Slide4 />
          </CarouselSlide>
          <CarouselSlide>
            <Slide5 />
          </CarouselSlide>
        </Carousel>
      </div>
    </div>
  );
};
