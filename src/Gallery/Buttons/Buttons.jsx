import "./Buttons.css";

import prevSrc from "../../../public/prev.png";
import prevDisabledSrc from "../../../public/prev-disabled.png";
import nextSrc from "../../../public/next.png";
import nextDisabledSrc from "../../../public/next-disabled.png";

import { useState, Children, useEffect } from "react";

import Button from "./Button/Button";

export default function Buttons({
  body,
  root,
  children,
  gallery,
  onMouseEnter,
  onMouseLeave,
}) {
  const IMAGE_WIDTH = 1280;
  const [offset, setOffset] = useState(0);
  let top = body.clientHeight / 2 - 90 / 2 - 36 + "px";

  const prevSlide = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + IMAGE_WIDTH;

      if (newOffset <= 0) {
        gallery.current.querySelector(
          ".carousel-items"
        ).style.transform = `translateX(${newOffset}px)`;
      } else {
        newOffset = 0;
      }

      return newOffset;
    });
  };

  const nextSlide = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - IMAGE_WIDTH;

      if (newOffset <= 0 && newOffset >= -IMAGE_WIDTH * 10) {
        gallery.current.querySelector(
          ".carousel-items"
        ).style.transform = `translateX(${newOffset}px)`;
      } else {
        newOffset = -12800;
      }

      return newOffset;
    });
  };

  return (
    <div
      className="buttons-block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Button src={prevSrc} direction="prev" top={top} onClick={prevSlide} />
      <Button src={nextSrc} direction="next" top={top} onClick={nextSlide} />
    </div>
  );
}
