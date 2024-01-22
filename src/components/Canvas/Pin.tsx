import { Circle, CircleDashed } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { usePinsStore } from "@/store/PinStore";

export default function Pin(pin: Pin) {
  const { activePin, setActivePin, deletePinById } = usePinsStore();

  const style = {
    top: pin.position.y + "%",
    left: pin.position.x + "%",
    // translate: `-10px -10px`,
  };

  const circleClasses =
    "h-5 w-5 drop-shadow transition-transform will-change-transform text-white";

  return (
    <button
      draggable="true"
      style={style}
      className="absolute"
      onClick={() => setActivePin(pin)}
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
