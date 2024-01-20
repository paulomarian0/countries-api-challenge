import { create } from "zustand"

interface IRegionStorage {
    region: string
    setRegion: (region: string) => void
}

const useRegionStorage = create<IRegionStorage>((set) => ({
    region: 'all',
    setRegion: (region) => set({ region }),
}))

export { useRegionStorage }