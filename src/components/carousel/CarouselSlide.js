import React, { memo } from "react";
import PropTypes from "prop-types";

export const CarouselSlide = memo(({ children }) => (
  <div className="carousel-slide-component">{children}</div>
));

CarouselSlide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
