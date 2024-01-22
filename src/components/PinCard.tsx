import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { convertColor } from "@/utils/colorUtils";
import { usePinsStore } from "@/store/PinStore";

export default function PinCard(pin: Pin) {
  const { activePin, setActivePin } = usePinsStore();

  return (
    <Button
      variant="outline"
      style={{
        borderColor:
          activePin?.id === pin.id ? convertColor(pin.color, "hex") : "",
        background: `linear-gradient(135deg, hsla(${pin.color.hue}, ${pin.color.saturation}%, ${pin.color.lightness}%, .15) 0%, hsla(0,0%,0%,0) 80%)`,
      }}
      className={
        "flex flex-col w-full p-0 overflow-hidden mt-4 group overflow-visible animate-fade-down " +
        (activePin?.id === pin.id && "border-dashed border-2")
        // TODO fix reposition of elements when border increase
      }
      onClick={() => setActivePin(pin)}
    >
      <div className="flex justify-between w-full h-full items-center">
        <div
          className="w-10 aspect-square m-1 rounded"
          style={{ backgroundColor: convertColor(pin.color, "hex") }}
        ></div>
        <div className="h-full w-full flex items-center p-3">
          {convertColor(pin.color, "hex")}
        </div>
        <Button
          asChild
          variant="ghost"
          className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronDown className="h-full w-12" />
        </Button>
      </div>
    </Button>
  );
}
