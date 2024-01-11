import "./Gallery.css";

import { useState, useEffect, useRef } from "react";

import Carousel from "./Carousel/Carousel";
import Buttons from "./Buttons/Buttons";

export default function Gallery() {
  let body = document.body;
  let root = document.querySelector("#root");

  const galleryRef = useRef(null);

  return (
    <div ref={galleryRef} className="gallery">
      <Carousel body={body} />
      <Buttons body={body} root={root} gallery={galleryRef} />
    </div>
  );
}
