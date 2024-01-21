import { create } from 'zustand'

interface CanvasState {
    backgroundgColor: Color,
    size: CanvasSize,
    updateBackgroundColor: (color: Color) => void,
    updateCanvasSize: (size: CanvasSize) => void

}

export const useCanvasStore = create<CanvasState>()((set) => ({
    backgroundgColor: {
        hue: 0,
        saturation: 0,
        lightness: 0,
        alpha: 0,
    },
    size: {
        ratio: 'responsive',
        orientation: null,
        cssClass: 'h-full w-full'
    },
    updateBackgroundColor: (color: Color) => set(() => ({ backgroundgColor: color })),
    updateCanvasSize: (size: CanvasSize) => set(() => ({ size: size })),
}));