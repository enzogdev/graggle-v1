import { Canvas } from "./Canvas/Canvas";
import ColorPickerWidget from "./ColorPickerWidget/ColorPickerWidget";
import ColorSolidWidget from "./ColorSolidWidget/ColorSolidWidget";
import { Footer } from "./Footer";
import Header from "./Header";
import PinList from "./PinCard/PinList";
import Toolbar from "./ToolBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Layout() {
  return (
    <>
      <div className="flex flex-row gap-4 w-full h-full overflow-auto p-0">
        <div className="flex flex-col gap-4 h-full w-72">
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
              <ColorPickerWidget />
            </TabsContent>
            <TabsContent value="solid">
              <ColorSolidWidget />
            </TabsContent>
          </Tabs>

          <PinList />
          <Toolbar />
          <Footer />
        </div>
        <div className="w-full h-full overflow-hidden p-0">
          <Canvas />
        </div>
      </div>
    </>
  );
}
