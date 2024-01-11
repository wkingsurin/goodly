import "./Button.css";

export default function Button({ src, alt, direction, top }) {
  return (
    <button className={"button" + " " + direction} style={{ top: top }}>
      <img className="icon" src={src} alt={alt} />
    </button>
  );
}
