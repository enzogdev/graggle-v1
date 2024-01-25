import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { convertColor } from "@/utils/colorUtils";

export default function SelectorPosition(pin: Pin) {
  return (
    <div className="flex flex-row w-full gap-3 h-full pt-4">
      <Card className="w-full aspect-square relative bg-accent">
        <svg
          width="2"
          height="20"
          className="h-full absolute opacity-30"
          style={{
            left: pin.position.x + "%",
            top: 0,
            backgroundColor: convertColor(pin.color, "hex"),
          }}
        >
          <line x1="20" y1="20" x2="20" y2="20"></line>
        </svg>
        <svg
          width="20"
          height="2"
          className="w-full absolute opacity-30"
          style={{
            top: pin.position.y + "%",
            left: 0,
            backgroundColor: convertColor(pin.color, "hex"),
          }}
        >
          <line x1="20" y1="20" x2="20" y2="20"></line>
        </svg>
      </Card>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="position-x">Axis X:</Label>
        <Input type="number" id="position-x" value={pin.position.x} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="position-y">Axis Y:</Label>
        <Input type="number" id="position-y" value={pin.position.y} />
      </div>
    </div>
  );
}
