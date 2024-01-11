import "./Carousel.css";
import ImageBlock from "./ImageBlock/ImageBlock";

import images from "../../../images.json";
import { useState } from "react";

export default function Carousel({ body }) {
  let imgBlocks = images.map((image, index) => {
    let name = image.name.split("-").join(" ");

    return (
      <div key={index} className="image-wrapper">
        <ImageBlock key={image.src} src={image.src} width={1280} height={720} />
        <figcaption key={image.name} className="figcaption">
          {name}
        </figcaption>
      </div>
    );
  });

  return (
    <div className="carousel">
      <div className="carousel-items">{imgBlocks}</div>
      {/* <ImageBlock src={images[1].src} width={1280} height={720} /> */}
    </div>
  );
}
