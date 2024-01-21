import { create } from 'zustand';

interface PinState {
    pinList: Pin[];
    createPin: (pin: Pin) => void;
    updatePin: (pin: Pin) => void;
    deletePinById: (id: Pin["id"]) => void;
    updatePinOrder: (pinList: Pin[]) => void;
}

export const usePinsStore = create<PinState>((set) => ({
    pinList: [],
    createPin: (pin) => set((state) => ({ pinList: [...state.pinList, pin] })),
    updatePin: (pin) => set((state) => ({ pinList: state.pinList.map((p) => (p.id === pin.id ? pin : p)) })),
    deletePinById: (id) => set((state) => ({ pinList: state.pinList.filter((pin) => pin.id !== id) })),
    updatePinOrder: (pinList) => set({ pinList })
}));
