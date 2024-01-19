import { CopyIcon, EyeIcon, PaintBucketIcon, RatioIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Toolbar() {
  return (
    <Card className="flex flex-row justify-between w-full">
      <Button variant="ghost" className="h-12 flex-1">
        <EyeIcon />
      </Button>
      <Button variant="ghost" className="h-12 flex-1">
        <CopyIcon />
      </Button>
      <Button variant="ghost" className="h-12 flex-1">
        <PaintBucketIcon />
      </Button>
      <Button variant="ghost" className="h-12 flex-1">
        <RatioIcon />
      </Button>
    </Card>
  );
}
