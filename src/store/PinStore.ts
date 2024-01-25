import { create } from 'zustand';

interface PinState {
    pinList: Pin[];
    activePin: Pin | null;
    isPinsVisible: boolean;
    setIsPinsVisible: (isPinsVisible: boolean) => void;
    setActivePin: (pin: Pin) => void;
    createPin: (pin: Pin) => void;
    updatePin: (pin: Pin) => void;
    deletePinById: (id: Pin["id"]) => void;
    setPinOrder: (pinList: Pin[]) => void;
}

export const usePinsStore = create<PinState>((set) => ({
    pinList: [{
        id: "bd9e97d4-ddfe-47a9-b59d-b55b43ff31e1",
        color: {
            hue: 41,
            saturation: 100,
            lightness: 50,
            alpha: .5,
        },
        position: {
            x: 50,
            y: 50,
        },
    },
    ],
    activePin: null,
    isPinsVisible: true,
    setIsPinsVisible: (isPinsVisible) => set({ isPinsVisible }),
    setActivePin: (activePin) => set({ activePin }),
    createPin: (pin) => set((state) => ({ pinList: [...state.pinList, pin] })),
    updatePin: (pin) => set((state) => ({ pinList: state.pinList.map((p) => (p.id === pin.id ? pin : p)) })),
    deletePinById: (id) => set((state) => ({ pinList: state.pinList.filter((pin) => pin.id !== id) })),
    setPinOrder: (pinList) => set({ pinList })
}));
