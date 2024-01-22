import { usePinsStore } from "@/store/PinStore";
import { useCallback, useEffect, useState } from "react";

export default function SelectorAlpha() {
  const backgroundAlpha = {
    background: `url("alpha-mask.png"),#F00`,
    backgroundSize: "cover",
  };
  const { activePin, updatePin, setActivePin } = usePinsStore();
  const [alphaValue, setAlphaValue] = useState(activePin?.color.alpha ?? 1);

  const handleAlphaChange = useCallback(
    (event: { target: { value: string } }) => {
      const newalphaValue = parseFloat(event.target.value);
      setAlphaValue(newalphaValue);

      if (!activePin) return;
      const updatedPin = {
        ...activePin,
        color: { ...activePin.color, alpha: newalphaValue },
      };
      updatePin(updatedPin);
      setActivePin(updatedPin);
    },
    [activePin, setActivePin, updatePin]
  );

  useEffect(() => {
    setAlphaValue(activePin?.color.alpha ?? 1);
  }, [activePin]);

  return (
    <input
      className="w-full appearance-none h-3 rounded-xl"
      style={backgroundAlpha}
      type="range"
      min="0"
      max="1"
      step="0.01"
      onChange={handleAlphaChange}
      value={alphaValue}
    />
  );
}
