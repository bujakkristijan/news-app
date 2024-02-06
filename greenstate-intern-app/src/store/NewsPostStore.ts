import { create } from "zustand";
import { NewPostDataWithDate } from "../shared/types/new-post/newPost";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type NewsState = {
  newsPosts: NewPostDataWithDate[];
  addNewsPost: (newPost: NewPostDataWithDate) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsStore = create(
  persist(
    immer((set) => ({
      newsPosts: [],
      addNewsPost: (newPost: NewPostDataWithDate) =>
        set((state: NewsState) => ({
          newsPosts: [...state.newsPosts, newPost],
        })),
      removeAllNewsPosts: () => set({ newsPosts: [] }),
    })),
    {
      name: "news-posts",
    },
  ),
);
