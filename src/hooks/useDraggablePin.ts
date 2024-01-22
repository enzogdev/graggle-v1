import { usePinsStore } from "@/store/PinStore";
import { useRef } from "react";

export function useDraggablePin(pin: Pin) {

    const lastMousePos = useRef({ x: 0, y: 0 });
    const canvas = document.getElementById('canvas');
    const { deletePinById, updatePin } = usePinsStore();

    const handleClick = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation();
        console.log('clicked');
    };

    const calculateNewPosition = (e: { clientX: number; clientY: number; }) => {
        if (!canvas) return { x: 0, y: 0 };

        const deltaX = e.clientX - lastMousePos.current.x;
        const deltaY = e.clientY - lastMousePos.current.y;
        const newX = (pin.position.x + (deltaX / canvas.clientWidth) * 100).toFixed(2);
        const newY = (pin.position.y + (deltaY / canvas.clientHeight) * 100).toFixed(2);
        return { x: parseFloat(newX), y: parseFloat(newY) };
    };

    const handleDragStart = (e: { clientX: any; clientY: any; }) => {
        lastMousePos.current = { x: e.clientX, y: e.clientY };
        console.log(lastMousePos.current)
    };

    const handleDrag = (e: { clientX: any; clientY: any; }) => {
        const { x, y } = calculateNewPosition(e);
        const newPin: Pin = { ...pin, position: { x, y } };
        updatePin(newPin);
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const { x, y } = calculateNewPosition(e);
        const newPin: Pin = { ...pin, position: { x, y } };

        if (x < 0 || x > 100 || y < 0 || y > 100) {
            deletePinById(newPin.id);
        } else {

            updatePin(newPin);
        }
    };



    return {
        handleDragStart,
        handleDrag,
        handleDragEnd,
        handleClick,
    };
}