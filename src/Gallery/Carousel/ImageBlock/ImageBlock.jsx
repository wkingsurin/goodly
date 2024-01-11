import "./ImageBlock.css";

export default function ImageBlock({ src, alt, width, height }) {
  return (
    <div className="image-block">
      <img
        className="image"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
}
