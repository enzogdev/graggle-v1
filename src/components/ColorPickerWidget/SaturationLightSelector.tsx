import { usePinsStore } from "@/store/PinStore";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";

export default function SaturationLightSelector() {
  const { activePin } = usePinsStore();

  const [hueValue, setHueValue] = useState(activePin?.color.hue ?? 0);
  useEffect(() => {
    setHueValue(activePin?.color.hue ?? 0);
  }, [activePin]);
  return (
    <Card
      id="picking_area"
      className="aspect-[4/3] w-full relative"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%),
        linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%),hsl(${hueValue}, 100%, 50%)`,
        minHeight: "150px",
      }}
    >
      <div
        className="cursor"
        draggable
        style={{
          position: "absolute",
          bottom: `calc(50% - 10px)`,
          left: `calc(50% - 10px)`,
        }}
      ></div>
    </Card>
  );
}
