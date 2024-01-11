import "./Carousel.css";
import ImageBlock from "./Image-Block/ImageBlock";

import imageSrc from "../../../public/lamborghini.jpg";

export default function Carousel({ body }) {
  let name = imageSrc
    .split("/")[2]
    .split(".")[0]
    .split("-")
    .map((word) => {
      let splittedWord = word.split("");
      let firstChar = splittedWord[0].toUpperCase();
      splittedWord[0] = firstChar;

      return splittedWord.join("");
    })
    .join(" ");

  return (
    <div className="carousel">
      <ImageBlock src={imageSrc} width={1280} height={720} />
      <figcaption className="figcaption">{name}</figcaption>
    </div>
  );
}
