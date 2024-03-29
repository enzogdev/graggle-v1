import {
  CopyIcon,
  EyeIcon,
  EyeOffIcon,
  PaintBucketIcon,
  RatioIcon,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePinsStore } from "@/store/PinStore";

export default function Toolbar() {
  const { isPinsVisible, setIsPinsVisible } = usePinsStore();
  return (
    <Card className="flex flex-row justify-between w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            onClick={() => setIsPinsVisible(!isPinsVisible)}
            className={"h-12 flex-1" + buttonVariants({ variant: "ghost" })}
          >
            {isPinsVisible ? <EyeIcon /> : <EyeOffIcon />}
          </TooltipTrigger>
          <TooltipContent>
            <p>Turn invisible pins</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={"h-12 flex-1" + buttonVariants({ variant: "ghost" })}
          >
            <CopyIcon />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-center">
              Copy css gradient <br />
              into clipboard
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={"h-12 flex-1" + buttonVariants({ variant: "ghost" })}
          >
            <PaintBucketIcon />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-center">
              Change canvas
              <br />
              background color
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={"h-12 flex-1" + buttonVariants({ variant: "ghost" })}
          >
            <RatioIcon />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-center">
              Change canvas <br />
              aspect ratio
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Card>
  );
}
