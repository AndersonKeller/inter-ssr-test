import { create } from "zustand";
import { UserData } from "./../../../providers/user/interfaces";
interface UserStoreProps {
  user: UserData | null;
  setUser: (user: UserData) => void;
  token: string;
  setToken: (token: string) => void;
}
export const useUserStore = create<UserStoreProps>((set, get) => ({
  user: null,
  token: "",
  setToken: (token: string) => set(() => ({ token: token })),
  setUser: (user: UserData) => set(() => ({ user: user })),
}));
