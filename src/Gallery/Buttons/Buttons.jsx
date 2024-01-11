import "./Buttons.css";

import prevSrc from "../../../public/prev.png";
import prevDisabledSrc from "../../../public/prev-disabled.png";
import nextSrc from "../../../public/next.png";
import nextDisabledSrc from "../../../public/next-disabled.png";

import Button from "./Button/Button";

export default function Buttons({ body }) {
  let top = body.clientHeight / 2 - 90 / 2 - 36 + "px";

  return (
    <div className="buttons-block">
      <Button src={prevDisabledSrc} direction="prev" top={top} />
      <Button src={nextSrc} direction="next" top={top} />
    </div>
  );
}
