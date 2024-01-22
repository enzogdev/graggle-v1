import { usePinsStore } from "@/store/PinStore";
import { Input } from "../ui/input";
import ColorModeSelector from "./ColorModeSelector";
import SaturationLightSelector from "./SaturationLightSelector";
import SelectorAlpha from "./SelectorAlpha";
import SelectorHue from "./SelectorHue";
import { convertColor } from "@/utils/colorUtils";

export default function ColorPickerWidget() {
  const { activePin } = usePinsStore();

  const backgroundColor =
    activePin != null ? convertColor(activePin?.color, "rgba") : "#FF0";

  return (
    <>
      <div className="flex flex-row gap-0">
        <SaturationLightSelector />
      </div>
      <div className="flex flex-row gap-4 py-4">
        <div
          className="aspect-square w-12 rounded-full"
          style={{
            boxShadow: `inset 0 0 0px 100px ${backgroundColor}`,
            background: `url("alpha-mask.png")`,
            backgroundSize: "cover",
          }}
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
