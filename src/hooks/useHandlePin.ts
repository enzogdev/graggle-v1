import { usePinsStore } from "@/store/PinStore";
import { UUID } from "crypto";
import { v4 as uuid } from "uuid";

export function useHandlePin() {

    const { createPin, setActivePin, updatePin, deletePinById, setPinOrder } = usePinsStore();

    const handleCreatePin = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const canvasElement = e.target as HTMLDivElement;

        if (canvasElement.id !== "canvas") return;

        const { clientWidth, clientHeight } = canvasElement;

        const position = {
            x: Math.floor((e.nativeEvent.offsetX / clientWidth) * 100),
            y: Math.floor((e.nativeEvent.offsetY / clientHeight) * 100),
        };

        const newPin: Pin = {
            id: uuid(),
            color: {
                hue: Math.floor(Math.random() * 361),
                saturation: 100,
                lightness: 50,
                alpha: 1,
            },
            position,
        };

        createPin(newPin);
        setActivePin(newPin);
    };

    const handleUpdatePin = (updatedPin: Pin) => {
        updatePin(updatedPin);
    };

    const handleDeletePin = (pinId: UUID) => {
        deletePinById(pinId);
    };

    const handlePinOrderChange = (newPinList: Pin[]) => {
        setPinOrder(newPinList);
    };
    const handleSetActivePin = (pin: Pin) => {
        setActivePin(pin);
    };
    return {
        handleCreatePin,
        handleUpdatePin,
        handleDeletePin,
        handlePinOrderChange,
        handleSetActivePin
    }
}