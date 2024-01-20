import { Canvas } from "./Canvas";
import ColorSelector from "./ColorSelector";
import Header from "./Header";
import PinList from "./PinList";
import Toolbar from "./ToolBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Layout() {
  return (
    <>
      <div className="flex flex-row gap-4 w-full h-full overflow-auto p-0">
        <div className="flex flex-col gap-4 h-full">
          <Header />
          <Tabs defaultValue="picker">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="picker">
                Picker
              </TabsTrigger>
              <TabsTrigger className="w-full" value="solid">
                Solid
              </TabsTrigger>
            </TabsList>
            <TabsContent value="picker">
              <ColorSelector />
            </TabsContent>
            <TabsContent value="solid">Change your password here.</TabsContent>
          </Tabs>

          <PinList />
          <Toolbar />
        </div>
        <div className="w-full h-full overflow-hidden p-0">
          <Canvas />
        </div>
      </div>
    </>
  );
}
