import "./Gallery.css";

import { useState, useEffect, useRef } from "react";

import Carousel from "./Carousel/Carousel";
import Buttons from "./Buttons/Buttons";

export default function Gallery() {
  let body = document.body;
  let root = document.querySelector("#root");

  const galleryRef = useRef(null);

  const onMouseEnter = () => {
    galleryRef.current.querySelector(".buttons-block").style.opacity = 1;
  };

  const onMouseLeave = () => {
    galleryRef.current.querySelector(".buttons-block").style.opacity = "";
  };

  return (
    <div ref={galleryRef} className="gallery">
      <Carousel
        body={body}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Buttons
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        body={body}
        root={root}
        gallery={galleryRef}
      />
    </div>
  );
}
