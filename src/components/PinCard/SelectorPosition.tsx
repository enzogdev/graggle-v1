import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { convertColor } from "@/utils/colorUtils";
import { usePinsStore } from "@/store/PinStore";

export default function SelectorPosition(pin: Pin) {
  const { updatePin, activePin } = usePinsStore();

  function handlePositionXChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newX = parseFloat(e.target.value);
    if (!activePin) return;
    updatePin({
      ...activePin,
      position: { ...activePin.position, x: newX },
    });
  }
  function handlePositionYChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newY = parseFloat(e.target.value);
    if (!activePin) return;
    updatePin({
      ...activePin,
      position: { ...activePin.position, y: newY },
    });
  }

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
        <Input
          type="number"
          id="position-x"
          step="0.01"
          min={0}
          max={0}
          onChange={(e) => handlePositionXChange(e)}
          value={pin.position.x || 0}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="position-y">Axis Y:</Label>
        <Input
          type="number"
          step="0.01"
          min={0}
          max={0}
          id="position-y"
          onChange={(e) => handlePositionYChange(e)}
          value={pin.position.y || 0}
        />
      </div>
    </div>
  );
}
