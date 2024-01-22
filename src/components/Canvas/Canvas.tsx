import { usePinsStore } from "@/store/PinStore";
import { Card } from "../ui/card";

import Pin from "./Pin";
import { pinsToCss } from "@/utils/colorUtils";
import { useCrudPin } from "@/hooks/useCrudPin";

export function Canvas() {
  const { pinList, isPinsVisible } = usePinsStore();

  const { handleCreatePin } = useCrudPin();

  const gradientCanvas = pinsToCss(pinList);
  return (
    <Card
      id="canvas"
      className="w-full h-full transition-all relative"
      style={{ background: gradientCanvas }}
      onClick={(e) => handleCreatePin(e)}
    >
      {isPinsVisible && pinList.map((pin) => <Pin key={pin.id} {...pin} />)}
    </Card>
  );
}
