import { create } from "zustand";
import { NewPostData } from "../pages/new-post/createNewPostSchema";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type NewsState = {
  newsPosts: NewPostData[];
  addNewsPost: (newPost: NewPostData) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsStore = create(
  persist(
    immer((set) => ({
      newsPosts: [],
      addNewsPost: (newPost: NewPostData) =>
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
