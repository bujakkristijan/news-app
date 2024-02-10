import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type AppState = {
  isLoading: boolean;
  setIsLoading: (payload: boolean) => void;
  isError: boolean;
  setIsError: (payload: boolean) => void;
};

export const useAppState = create<AppState>()(
  persist(
    immer((set) => ({
      isLoading: false,
      setIsLoading: (payload: boolean) =>
        set((state) => {
          state.isLoading = payload;
        }),
      isError: false,
      setIsError: (payload: boolean) =>
        set((state) => {
          state.isError = payload;
        }),
    })),
    {
      name: "app-state",
    },
  ),
);
