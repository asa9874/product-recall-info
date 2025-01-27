import { create } from 'zustand';

interface GlobalState {
  searchString: string;
  setSearchString: (searchString: string) => void;
}

// zustand store
const useStore = create<GlobalState>((set) => ({
  searchString: '',
  setSearchString: (searchString) => set({ searchString }),
}));

export { useStore };

