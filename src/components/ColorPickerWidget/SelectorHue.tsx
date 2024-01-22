import { useState, useEffect, useCallback } from "react";
import { usePinsStore } from "@/store/PinStore";

export default function SelectorHue() {
  const { activePin, updatePin, setActivePin } = usePinsStore();

  const backgroundHue = {
    background: "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",
  };

  const [hueValue, setHueValue] = useState(activePin?.color.hue ?? 0);

  const handleHueChange = useCallback(
    (event: { target: { value: string } }) => {
      const newHueValue = parseInt(event.target.value, 10);
      setHueValue(newHueValue);

      if (!activePin) return;
      const updatedPin = {
        ...activePin,
        color: { ...activePin.color, hue: newHueValue },
      };
      updatePin(updatedPin);
      setActivePin(updatedPin);
    },
    [activePin, setActivePin, updatePin]
  );

  useEffect(() => {
    setHueValue(activePin?.color.hue ?? 0);
  }, [activePin]);

  return (
    <input
      className="appearance-none h-3 rounded-xl picker"
      style={backgroundHue}
      type="range"
      min={0}
      max={360}
      step={1}
      onChange={handleHueChange}
      value={hueValue}
    />
  );
}
