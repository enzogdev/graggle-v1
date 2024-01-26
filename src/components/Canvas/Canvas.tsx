import { usePinsStore } from "@/store/PinStore";
import { Card } from "../ui/card";

import Pin from "./Pin";
import { pinsToCss } from "@/utils/colorUtils";
import { useHandlePin } from "@/hooks/useHandlePin";

export function Canvas() {
  const { pinList, isPinsVisible } = usePinsStore();

  const { handleCreatePin } = useHandlePin();

  const gradientCanvas = pinsToCss(pinList);

  return (
    <Card
      id="canvas"
      className="w-full h-full relative bg-card"
      style={{ backgroundImage: gradientCanvas }}
      onClick={(e) => handleCreatePin(e)}
    >
      {isPinsVisible && pinList.map((pin) => <Pin key={pin.id} {...pin} />)}
    </Card>
  );
}
