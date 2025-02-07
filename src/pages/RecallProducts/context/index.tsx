import { create } from 'zustand';

interface GlobalState {
  searchString: string;
  setSearchString: (searchString: string) => void;
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
  page: number;
  setPage: (page: number) => void;
}

// zustand store
const useStore = create<GlobalState>((set) => ({
  searchString: '',
  setSearchString: (searchString) => set({ searchString }),
  selectedItem: '음식',
  setSelectedItem: (selectedItem) => set({ selectedItem }),
  page: 0,
  setPage: (page) => set({ page }),
}));

export { useStore };
