import React from "react";
import commaGreen from "./img/comma-green.svg";
import face from "./img/face.svg";
import "./Slide1.scss";

export const Slide1 = () => (
  <div className="slide-content">
    <div className="slide1">
      <img src={commaGreen} alt="Comma Green" />
      <h1>
        This piece of software is <i>the shit</i>,
        <br />
        I’ve never tried anything like it.
      </h1>
      <img className="bottom-image" src={face} alt="face" />
      <h4>Mr. Face</h4>
      <p>Karma Guru @ Face Co™</p>
    </div>
  </div>
);
