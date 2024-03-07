import { usePinsStore } from "@/store/PinStore";
import { useEffect, useState } from "react";
import { Card } from "../ui/card";

export default function SaturationLightSelector() {
  const { activePin, updatePin } = usePinsStore();

  const [state, setState] = useState({
    value: activePin?.color.hue || 0,
    cursorPosition: { top: 100, left: 100 },
  });
  const containerRef = document.getElementById("picking_area");
  const handleDragStart = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", handleDragEnd);
  };
  const handleDrag = (e: { clientX: number; clientY: number }) => {
    if (!containerRef) return;

    const containerRect = containerRef.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(1, (e.clientX - containerRect.left) / containerRect.width)
    );

    const y = Math.max(
      0,
      Math.min(1, 1 - (e.clientY - containerRect.top) / containerRect.height)
    );

    const newLeft = Math.max(0, Math.min(100, x * 100));
    const newTop = Math.max(0, Math.min(100, y * 100));

    setState((prevState) => ({
      ...prevState,
      cursorPosition: { top: newTop, left: newLeft },
    }));

    if (activePin) {
      const saturation = Math.round(x * 100);
      const lightness = Math.round((y - (x * y) / 2) * 100);

      const newPin = {
        ...activePin,
        color: { ...activePin.color, saturation, lightness },
      };

      updatePin(newPin);
    }
  };

  const handleDragEnd = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", handleDragEnd);
  };
  const handleClick = (e: { clientX: number; clientY: number }) => {
    if (!containerRef) return;
    const containerRect = containerRef.getBoundingClientRect();
    const x = Math.max(
      0,
      Math.min(1, (e.clientX - containerRect.left) / containerRect.width)
    );
    const y = Math.max(
      0,
      Math.min(1, 1 - (e.clientY - containerRect.top) / containerRect.height)
    );

    const newLeft = Math.max(0, Math.min(100, x * 100));
    const newTop = Math.max(0, Math.min(100, y * 100));
    if (activePin) {
      const saturation = Math.round(x * 100);
      const lightness = Math.round((y - (x * y) / 2) * 100);

      const newPin = {
        ...activePin,
        color: { ...activePin.color, saturation, lightness },
      };

      updatePin(newPin);
    }

    setState({
      value: activePin?.color.hue || 0,
      cursorPosition: { top: newTop, left: newLeft },
    });
  };
  const [hueValue, setHueValue] = useState(activePin?.color.hue ?? 0);
  useEffect(() => {
    setHueValue(activePin?.color.hue ?? 0);
  }, [activePin]);
  return (
    <Card
      id="picking_area"
      onClick={handleClick}
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
          bottom: `calc(${state.cursorPosition.top}% - 10px)`,
          left: `calc(${state.cursorPosition.left}% - 10px)`,
        }}
        onMouseDown={handleDragStart}
      ></div>
    </Card>
  );
}
