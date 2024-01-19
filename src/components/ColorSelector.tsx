import { Input } from "@/components/ui/input";
import SaturationLightSelector from "./SaturationLightSelector";
import ColorModeSelector from "./ColorModeSelector";
import SelectorHue from "./SelectorHue";
import SelectorAlpha from "./SelectorAlpha";

export default function ColorSelector() {
  return (
    <div>
      <div className="flex flex-row gap-0">
        <SaturationLightSelector />
      </div>
      <div className="flex flex-row gap-4 py-4">
        <div
          className="aspect-square w-12 rounded-full"
          style={{ background: "#F00" }}
        ></div>
        <div className="flex flex-col gap-4 w-full">
          <SelectorHue />
          <SelectorAlpha />
        </div>
      </div>

      <div className="flex gap-2 flex-row">
        <ColorModeSelector />

        <div className="flex flex-row flex-2">
          <Input
            className="p-1 w-full border"
            type="text"
            defaultValue={"FF0000"}
          />
          <Input className="w-full p-1" type="number" defaultValue={"100"} />
        </div>
      </div>
    </div>
  );
}
