import { ScrollArea } from "@/components/ui/scroll-area";
import PinCard from "./PinCard";
import { usePinsStore } from "@/store/PinStore";

export default function PinList() {
  const { pinList } = usePinsStore();
  return (
    <ScrollArea className="h-full w-full rounded-md border px-4">
      {pinList.map((pin) => (
        <PinCard {...pin} key={pin.id} />
      ))}
    </ScrollArea>
  );
}
