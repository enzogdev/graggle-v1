import { ScrollArea } from "@/components/ui/scroll-area";
import Pin from "./Pin";

export default function PinList() {
  return (
    <ScrollArea className="h-full w-full rounded-md border px-4">
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
      <Pin />
    </ScrollArea>
  );
}
