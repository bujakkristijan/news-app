import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NewPostDataWithDate } from "../shared/types/new-post/newPost";
import { immer } from "zustand/middleware/immer";
import { initialNewsPosts } from "../shared/data/news-post/initialNewsPost";

export type NewsState = {
  newsPosts: NewPostDataWithDate[];
  addNewsPost: (newPost: NewPostDataWithDate) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsState = create<NewsState>()(
  persist(
    immer((set) => ({
      newsPosts: initialNewsPosts,
      addNewsPost: (newPost: NewPostDataWithDate) =>
        set((state: NewsState) => {
          state.newsPosts.push(newPost);
        }),
      removeAllNewsPosts: () =>
        set((state: NewsState) => {
          state.newsPosts = [];
        }),
    })),
    {
      name: "news-posts",
    },
  ),
);
