import { create } from 'zustand';

const useSongs = create((set) => ({
  songs: [],
  setSongs: (data) => set((state) => ({ songs: data })),
}));

export {
    useSongs
}
