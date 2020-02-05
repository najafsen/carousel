import React from "react";
import commaRed from "./img/comma-red.svg";
import cake from "./img/cake.svg";
import "./Slide2.scss";

export const Slide2 = () => (
  <div className="slide-content">
    <div className="slide2">
      <img src={commaRed} alt="Comma Red" />
      <h1>
        An experience that makes us feel like we’re covered in maple syrup –
        <i> It’s a good thing</i>
      </h1>
      <img className="bottom-image" src={cake} alt="Cake" />
      <h4>The whole team @</h4>
      <h4>The Pancake Collective™</h4>
    </div>
  </div>
);
