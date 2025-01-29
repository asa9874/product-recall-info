import { create } from 'zustand';

interface GlobalState {
  searchString: string;
  setSearchString: (searchString: string) => void;
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

// zustand store
const useStore = create<GlobalState>((set) => ({
  searchString: '',
  setSearchString: (searchString) => set({ searchString }),
  selectedItem: '음식',
  setSelectedItem: (selectedItem) => set({ selectedItem }),
}));

export { useStore };

