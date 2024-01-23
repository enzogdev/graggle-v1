import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

export default function SelectorPosition(pin: Pin) {
  return (
    <div className="flex flex-row w-full gap-4 h-full pt-4">
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
