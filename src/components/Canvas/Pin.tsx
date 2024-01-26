import { Circle, CircleDashed } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { usePinsStore } from "@/store/PinStore";
import useDraggablePin from "@/hooks/useDraggablePin";

export default function Pin(pin: Pin) {
  const { activePin, setActivePin, deletePinById } = usePinsStore();

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  0;
  const { handleDrag, handleDragStart, handleDragEnd } = useDraggablePin(
    pin,
    canvas
  );

  const style = {
    top: pin.position.y + "%",
    left: pin.position.x + "%",
  };

  const circleClasses =
    "h-5 w-5 drop-shadow transition-transform will-change-transform text-white";

  return (
    <button
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={style}
      className="absolute"
      onMouseDown={() => setActivePin(pin)}
    >
      <ContextMenu>
        <ContextMenuTrigger>
          {activePin?.id !== pin.id ? (
            <Circle className={circleClasses + " hover:scale-125"} />
          ) : (
            <CircleDashed
              style={{ animation: "spin 4s linear infinite" }}
              className={circleClasses + " scale-125"}
            />
          )}
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={() => setActivePin(pin)}>
            Edit
          </ContextMenuItem>
          <ContextMenuItem>Duplicate</ContextMenuItem>
          <ContextMenuItem onClick={() => deletePinById(pin.id)}>
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </button>
  );
}
