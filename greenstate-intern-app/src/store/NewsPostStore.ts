import { create } from "zustand";
import { NewPostData } from "../pages/new-post/createNewPostSchema";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type NewsState = {
  newsPosts: NewPostData[];
  addNewsPost: (newPost: NewPostData) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsState = create<NewsState>()(
  persist(
    immer((set) => ({
      newsPosts: [],
      addNewsPost: (newPost: NewPostData) =>
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