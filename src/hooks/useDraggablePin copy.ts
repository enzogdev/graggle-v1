import { usePinsStore } from "@/store/PinStore";
import { useRef } from "react";

export function useDraggablePin(pin: Pin) {
    const lastMousePos = useRef({ x: 0, y: 0 });
    const canvas = document.getElementById('canvas');
    const { updatePin, setActivePin } = usePinsStore();

    const calculateNewPosition = (e: { clientX: number; clientY: number; }) => {
        if (!canvas) return { x: 0, y: 0 };

        const deltaX = e.clientX - lastMousePos.current.x;
        const deltaY = e.clientY - lastMousePos.current.y;
        const newX = (pin.position.x + (deltaX / canvas.clientWidth) * 100).toFixed(2);
        const newY = (pin.position.y + (deltaY / canvas.clientHeight) * 100).toFixed(2);
        return { x: parseFloat(newX), y: parseFloat(newY) };
    };

    const handleDragStart = (e: { clientX: number; clientY: number; }) => {
        setActivePin(pin)
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDrag = (e: { clientX: number; clientY: number; }) => {
        setActivePin(pin)
        const { x, y } = calculateNewPosition(e);
        const newPin: Pin = { ...pin, position: { x, y } };
        updatePin(newPin);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
        e.stopPropagation();

        const { x, y } = calculateNewPosition(e);
        const newX = Math.min(Math.max(x, 0), 100);
        const newY = Math.min(Math.max(y, 0), 100);

        const newPin: Pin = { ...pin, position: { x: newX, y: newY } };

        if (newX >= 0 && newX <= 100 && newY >= 0 && newY <= 100) {
            updatePin(newPin);
            setActivePin(newPin)
        }
    };

    const handleClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        console.log('clicked');
    };

    return {
        handleDragStart,
        handleDrag,
        handleDragEnd,
        handleClick,
    };
}
