import "./Button.css";

export default function Button({ src, alt, direction, top, onClick }) {
  return (
    <button
      className={"button" + " " + direction}
      style={{ top: top }}
      onClick={onClick}
    >
      <img className="icon" src={src} alt={alt} />
    </button>
  );
}
