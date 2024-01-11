import "./Gallery.css";

import { useState, useEffect, useRef } from "react";

import Carousel from "./Carousel/Carousel";
import Buttons from "./Buttons/Buttons";

export default function Gallery() {
  let body = document.body;

  return (
    <div className="gallery">
      <Carousel body={body} />
      <Buttons body={body} />
    </div>
  );
}
