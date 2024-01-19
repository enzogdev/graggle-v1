import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ColorModeSelector() {
  return (
    <Select>
      <SelectTrigger className="w-auto gap-2">
        <SelectValue placeholder="HEX" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="HEX">HEX</SelectItem>
        <SelectItem value="HSL">HSL</SelectItem>
        <SelectItem value="RGB">RGB</SelectItem>
      </SelectContent>
    </Select>
  );
}
