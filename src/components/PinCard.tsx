import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function PinCard() {
  return (
    <Button
      variant="outline"
      className="flex flex-col w-full p-0 overflow-hidden mt-4 group"
    >
      <div className="flex justify-between w-full h-full items-center">
        <div className="w-12 h-full bg-red-500"></div>
        <div className="h-full w-full flex items-center p-3">aaa</div>
        <Button
          asChild
          variant="ghost"
          className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronDown className="h-full w-12" />
        </Button>
      </div>
    </Button>
  );
}
