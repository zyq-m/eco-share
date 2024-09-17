import { create } from "zustand";

type UserStore = {
  email?: string;
  isAuth?: boolean;
  setEmail: (email: string) => void;
  setAuth: (isAuth: boolean) => void;
};

const useUserStore = create<UserStore>()((set) => ({
  email: "",
  isAuth: false,
  setEmail: (email: string) => set(() => ({ email: email })),
  setAuth: (isAuth: boolean) => set(() => ({ isAuth: isAuth })),
}));

export { useUserStore };
