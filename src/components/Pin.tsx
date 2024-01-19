import { GripVerticalIcon } from "lucide-react";
import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button";

export default function Pin() {
  return (
    <Button variant="outline" className="flex w-full p-0 overflow-hidden my-2">
      <div className="flex flex-row items-center gap-4 w-full">
        <div className="w-12 h-12 bg-red-500"></div>
        <div className="h-full w-full flex items-center">aaa</div>
        <span className={buttonVariants({ variant: "ghost", size: "icon" })}>
          <GripVerticalIcon />
        </span>
      </div>
    </Button>
  );
}
