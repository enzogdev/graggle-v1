import { Circle } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function Pin(pin: Pin) {
  const style = {
    top: pin.position.y + "%",
    left: pin.position.x + "%",
    // translate: `-10px -10px`,
  };

  return (
    <button draggable="true" style={style} className="absolute">
      <ContextMenu>
        <ContextMenuTrigger>
          <Circle
            className="h-5 w-5  shadow-inner hover:scale-125 transition-transform will-change-transform"

            // TODO Fix shadow in svg
          />
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Edit</ContextMenuItem>
          <ContextMenuItem>Duplicate</ContextMenuItem>
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {/* <button
      draggable
      style={pinStyle}
      className="pin h-5 w-5 absolute border-solid border-2 border-slate-100 rounded-full shadow-inner hover:scale-125 transition-transform will-change-transform"
    ></button> */}
    </button>
  );
}
