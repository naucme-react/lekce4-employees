import { create } from 'zustand';
import type { UserState } from './types';

const useStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: UserState["user"]) => set({ user }),
  filterString: "",
  setFilterString: (filter: string) => set({ filterString: filter }),
}));

export default useStore;