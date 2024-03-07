import { useRef } from "react";
import { useHandlePin } from "./useHandlePin";
import { usePinsStore } from "@/store/PinStore";


const useDraggablePin = (pin: Pin, canvas: HTMLElement) => {
    const { handleSetActivePin, handleUpdatePin } = useHandlePin();
    const { setActivePin } = usePinsStore();
    const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    const transparentImage = new Image(1, 1);
    transparentImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";


    const handleDragStart = (e: React.DragEvent<HTMLButtonElement>) => {
        const nativeEvent = e.nativeEvent as DragEvent;
        nativeEvent.dataTransfer?.setDragImage(transparentImage, 1, 1);
        handleSetActivePin(pin);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        e.currentTarget.classList.add('grabbingCursor');
    };

    const updatePinPosition = (e: React.DragEvent<HTMLButtonElement>) => {

        const { x, y } = calculateNewPosition(e);
        const newPin: Pin = { ...pin, position: { x, y } };
        handleUpdatePin(newPin);
    };

    const handleDrag = (e: React.DragEvent<HTMLButtonElement>) => {

        updatePinPosition(e);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
        updatePinPosition(e);
        setActivePin(pin);
        e.currentTarget.classList.remove('grabbingCursor');
    };

    const calculateNewPosition = (
        e: React.DragEvent<HTMLButtonElement>
    ): { x: number; y: number } => {
        const deltaX = e.clientX - lastMousePos.current.x;
        const deltaY = e.clientY - lastMousePos.current.y;

        const percentageX = (deltaX / canvas.clientWidth) * 100;
        const percentageY = (deltaY / canvas.clientHeight) * 100;

        const newX = (pin.position.x + percentageX).toFixed(2);
        const newY = (pin.position.y + percentageY).toFixed(2);

        return { x: parseFloat(newX), y: parseFloat(newY) };
    };

    return {
        handleDragStart,
        handleDrag,
        handleDragEnd,
    };
};

export default useDraggablePin;
