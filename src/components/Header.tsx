import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full flex justify-between min-w-[300px]">
      <span className="text-3xl font-bold tracking-tighter">graggle</span>
      <div>
        <Sheet>
          <SheetTrigger>
            <Button asChild variant="ghost" size="icon" className="p-2">
              <MenuIcon className="h-full " />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
