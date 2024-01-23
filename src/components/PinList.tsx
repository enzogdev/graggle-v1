import { ScrollArea } from "@/components/ui/scroll-area";
import PinCard from "./PinCard/PinCard";
import { usePinsStore } from "@/store/PinStore";
import { ReactSortable } from "react-sortablejs";

export default function PinList() {
  const { pinList, setPinOrder } = usePinsStore();
  return (
    <ScrollArea className="h-full w-full rounded-md border px-4">
      <ReactSortable
        animation={300}
        id="pinList"
        ghostClass="ghost-class"
        list={pinList}
        setList={setPinOrder}
      >
        {pinList.map((pin) => (
          <PinCard {...pin} key={pin.id} />
        ))}
      </ReactSortable>
    </ScrollArea>
  );
}
