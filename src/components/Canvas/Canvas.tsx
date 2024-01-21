import { Card } from "../ui/card";
import Pin from "./Pin";

const pins = [
  {
    id: "bd9e97d4-ddfe-47a9-b59d-b55b43ff31e1",
    color: {
      hue: 41,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    },
    position: {
      x: 49.55,
      y: 54.12,
    },
  },
  {
    id: "e60888a2-15c3-49af-973e-b9c64814bbaa",
    color: {
      hue: 313,
      saturation: 100,
      lightness: 50,
      alpha: 1,
    },
    position: {
      x: 11.42,
      y: 46.67,
    },
  },
];

const canvasClasses = "canvas transition-all relative";
export function Canvas() {
  return (
    <Card id="canvas" className={"w-full h-full " + canvasClasses}>
      {pins.map((pin) => (
        <Pin key={pin.id} {...pin} />
      ))}
    </Card>
  );
}
