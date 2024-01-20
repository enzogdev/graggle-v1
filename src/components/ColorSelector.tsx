import { Input } from "@/components/ui/input";
import SaturationLightSelector from "./SaturationLightSelector";
import ColorModeSelector from "./ColorModeSelector";
import SelectorHue from "./SelectorHue";
import SelectorAlpha from "./SelectorAlpha";

export default function ColorSelector() {
  return (
    <>
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

      <div className="flex gap-1 flex-row">
        <ColorModeSelector />

        <div className="flex">
          <Input className="w-full" type="text" defaultValue={"FF0000"} />
          <Input className="w-[5em]" type="number" defaultValue={"100"} />
        </div>
      </div>
    </>
  );
}
