export default function SaturationLightSelector() {
  return (
    <div
      id="picking_area"
      className="aspect-[4/3] w-full relative"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%),hsl(0, 100%, 50%)`,
        minHeight: "150px",
      }}
    ></div>
  );
}
