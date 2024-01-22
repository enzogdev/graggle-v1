import { usePinsStore } from "@/store/PinStore";
import { v4 as uuid } from "uuid";

export function useCrudPin() {

    const { createPin, setActivePin } = usePinsStore();

    const handleCreatePin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const canvasElement = e.target as HTMLDivElement;
        if (canvasElement.id !== "canvas") return;

        const canvasSize = {
            width: canvasElement.clientWidth,
            height: canvasElement.clientHeight,
        };
        const position = {
            x: Math.floor((e.nativeEvent.offsetX / canvasSize.width) * 100),
            y: Math.floor((e.nativeEvent.offsetY / canvasSize.height) * 100),
        };
        const newPin: Pin = {
            id: uuid(),
            color: {
                hue: Math.floor(Math.random() * 361),
                saturation: 100,
                lightness: 50,
                alpha: 1,
            },
            position: {
                x: position.x,
                y: position.y,
            },
        };
        createPin(newPin);
        setActivePin(newPin);
    };

    return {
        handleCreatePin
    }
}