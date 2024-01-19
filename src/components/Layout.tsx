import ColorSelector from "./ColorSelector";
import Header from "./Header";
import PinList from "./PinList";
import Toolbar from "./ToolBar";
import { Card } from "./ui/card";

export function Layout() {
  return (
    <>
      <div className="flex flex-row gap-4 w-full h-full overflow-auto p-0">
        <div className="flex flex-col gap-4 h-full">
          <Header />
          <ColorSelector />
          <PinList />
          <Toolbar />
        </div>
        <div className="w-full h-full flex justify-center items-center overflow-hidden p-0">
          <Card className="w-full h-full">a</Card>
        </div>
      </div>
    </>
  );
}
