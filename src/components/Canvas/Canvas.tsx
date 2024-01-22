import { usePinsStore } from "@/store/PinStore";
import { Card } from "../ui/card";
import { useDroppable } from "@dnd-kit/core";

import Pin from "./Pin";

export function Canvas() {
  const { pinList } = usePinsStore();

  const { isOver, setNodeRef } = useDroppable({
    id: "canvas",
  });
  const style = {
    borderColor: isOver ? "green" : undefined,
  };
  return (
    <Card
      id="canvas"
      className="w-full h-full transition-all"
      ref={setNodeRef}
      style={style}
    >
      {pinList.map((pin) => (
        <Pin key={pin.id} {...pin} />
      ))}
    </Card>
  );
}
