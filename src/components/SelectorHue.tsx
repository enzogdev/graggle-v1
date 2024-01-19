export default function SelectorHue() {
  const backgroundHue = {
    background: "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",
  };

  return (
    <input
      className="w-full appearance-none h-3 rounded-xl picker"
      style={backgroundHue}
      type="range"
      min={0}
      max={360}
      step={1}
    />
  );
}
