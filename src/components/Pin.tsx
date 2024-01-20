import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Pin() {
  return (
    <Button
      variant="outline"
      className="flex w-full p-0 overflow-hidden my-2 group"
    >
      <div className="flex flex-row items-center gap-4 w-full">
        <div className="w-12 h-12 bg-red-500"></div>
        <div className="h-full w-full flex items-center">aaa</div>
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="opacity-0 transition-opacity duration-200 group-hover:opacity-40"
        >
          <ChevronDown className="h-8 w-8" />
        </Button>
      </div>
    </Button>
  );
}
