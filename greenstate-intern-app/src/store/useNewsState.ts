import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { NewsPost } from "../api/responses/newsPost";

export type NewsState = {
  allNewsPosts: NewsPost[];
  latestNewsPosts: NewsPost[];
  addNewsPostToLatest: (newPost: NewsPost) => void;
  addNewsPostToAll: (newPost: NewsPost) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsState = create<NewsState>()(
  persist(
    immer((set) => ({
      allNewsPosts: [],
      latestNewsPosts: [],
      addNewsPostToAll: (newPost: NewsPost) =>
        set((state) => {
          state.allNewsPosts.push(newPost);
        }),
      addNewsPostToLatest: (newPost: NewsPost) =>
        set((state) => {
          state.latestNewsPosts.push(newPost);
        }),
      removeAllNewsPosts: () =>
        set((state) => {
          state.allNewsPosts = [];
        }),
    })),
    {
      name: "news-posts",
    },
  ),
);
