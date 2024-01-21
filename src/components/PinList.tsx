import { ScrollArea } from "@/components/ui/scroll-area";
import PinCard from "./PinCard";

export default function PinList() {
  return (
    <ScrollArea className="h-full w-full rounded-md border px-4">
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
      <PinCard />
    </ScrollArea>
  );
}
