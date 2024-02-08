import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NewPostDataWithDate } from "../shared/types/new-post/newPost";
import { immer } from "zustand/middleware/immer";

export type NewsState = {
  newsPosts: NewPostDataWithDate[];
  addNewsPost: (newPost: NewPostDataWithDate) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsState = create<NewsState>()(
  persist(
    immer((set) => ({
      newsPosts: [],
      addNewsPost: (newPost: NewPostDataWithDate) =>
        set((state) => {
          state.newsPosts.push(newPost);
        }),
      removeAllNewsPosts: () =>
        set((state) => {
          state.newsPosts = [];
        }),
    })),
    {
      name: "news-posts",
    },
  ),
);
