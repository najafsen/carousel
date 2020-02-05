import React, { memo, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Carousel.scss";

export const Carousel = memo(
  ({
    children,
    interval = 4000,
    transition = 500,
    timingFunction = "ease-in-out"
  }) => {
    const rootRef = useRef(null);
    const timeout = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * When one of the given dependencies change, update marginLeft, clear previous timeout and create new timeout
     */
    useEffect(() => {
      rootRef.current.children[0].style.marginLeft = `-${currentIndex}00%`;

      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % children.length);
      }, interval);

      return () => clearTimeout(timeout.current);
    }, [currentIndex, children.length, interval]);

    /**
     * when one of dependencies change, update transition and timing function of slides
     */
    useEffect(() => {
      Array.from(rootRef.current.children || []).forEach((child, index) => {
        if (index >= children.length) {
          // we are on navigation buttons container
          return;
        }

        child.style.transition = `margin-left ${transition}ms ${timingFunction}`;
      });
    }, [transition, timingFunction, children.length]);

    return (
      <div data-testid="carousel" ref={rootRef} className="carousel-component">
        {children}
        <div data-testid="navigation-buttons" className="navigation-buttons">
          {React.Children.map(children, (child, childIndex) => (
            <div
              className={cx("navigation-button", {
                active: childIndex === currentIndex
              })}
              onClick={() => {
                setCurrentIndex(childIndex);
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
);

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  interval: PropTypes.number,
  transition: PropTypes.number,
  timingFunction: PropTypes.string
};
