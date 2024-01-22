import { Circle } from "lucide-react";

import { useDraggable } from "@dnd-kit/core";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function Pin(pin: Pin) {
  // const pinStyle = {
  //   top: pin.position.y + "%",
  //   left: pin.position.x + "%",
  //   translate: `-28% -20%`,
  // };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "bd9e97d4-ddfe-47a9-b59d-b55b43ff31e1",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <span
      draggable
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
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
    </span>
  );
}
