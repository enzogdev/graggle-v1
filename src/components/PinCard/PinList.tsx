import { ScrollArea } from "@/components/ui/scroll-area";
import PinCard from "./PinCard";
import { usePinsStore } from "@/store/PinStore";
import { ReactSortable } from "react-sortablejs";
import { useHandlePin } from "@/hooks/useHandlePin";

export default function PinList() {
  const { pinList } = usePinsStore();
  const { handlePinOrderChange } = useHandlePin();

  return (
    <ScrollArea className="h-full w-full rounded-md border px-4">
      <ReactSortable
        animation={300}
        id="pinList"
        ghostClass="ghost-class"
        filter=".ignore-elements"
        list={pinList}
        setList={handlePinOrderChange}
      >
        {pinList.map((pin) => (
          <PinCard {...pin} key={pin.id} />
        ))}
      </ReactSortable>
    </ScrollArea>
  );
}
