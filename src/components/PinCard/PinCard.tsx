import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { convertColor } from "@/utils/colorUtils";
import { usePinsStore } from "@/store/PinStore";
import { AccordionContent } from "../ui/accordion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Card } from "../ui/card";
import SelectorPosition from "./SelectorPosition";

export default function PinCard(pin: Pin) {
  const { activePin, setActivePin } = usePinsStore();

  return (
    <Card
      style={{
        borderColor:
          activePin?.id === pin.id ? convertColor(pin.color, "hex") : "",
        background: `linear-gradient(135deg, hsla(${pin.color.hue}, ${pin.color.saturation}%, ${pin.color.lightness}%, .15) 0%, hsla(0,0%,0%,0) 80%)`,
      }}
      className={
        " flex flex-col w-full overflow-hidden mt-4 group overflow-visible animate-fade-down h-auto p-2 " +
        (activePin?.id === pin.id && "border-dashed border-2")
        // TODO fix reposition of elements when border increase
      }
      onClick={() => setActivePin(pin)}
    >
      <Accordion type="single" collapsible className="w-full flex flex-col">
        <AccordionItem value="item-1">
          <div className="flex justify-between w-full h-full items-center">
            <div
              className="w-14 aspect-square rounded relative overflow-hidden"
              style={{ backgroundColor: convertColor(pin.color, "hex") }}
            >
              <svg
                width="2"
                height="20"
                className="bg-white h-full absolute opacity-80"
                style={{ left: pin.position.x + "%", top: 0 }}
              >
                <line x1="20" y1="20" x2="20" y2="20"></line>
              </svg>
              <svg
                width="20"
                height="2"
                className="bg-white w-full absolute opacity-80"
                style={{ top: pin.position.y + "%", left: 0 }}
              >
                <line x1="20" y1="20" x2="20" y2="20"></line>
              </svg>
            </div>
            <div className="h-full w-full flex items-center px-3">
              {convertColor(pin.color, "hex")}
            </div>
            <AccordionTrigger>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronDown className="h-full w-12" />
              </Button>
            </AccordionTrigger>
          </div>
          <AccordionContent className="flex justify-between w-full h-full items-center pb-0">
            <SelectorPosition {...pin} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
