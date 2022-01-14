export default function Input({ x, y, w, h, to }) {
  return (
    <input
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${w}px`,
        height: `${h}px`
      }}
      type="text"
    />
  );
}
