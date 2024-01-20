import { CopyIcon, EyeIcon, PaintBucketIcon, RatioIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Toolbar() {
  return (
    <Card className="flex flex-row justify-between w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={"h-12 flex-1" + buttonVariants({ variant: "ghost" })}
          >
            <EyeIcon />
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
