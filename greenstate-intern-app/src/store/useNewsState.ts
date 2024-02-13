import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { NewsPostPublicAPI } from "../api/responses/newsPost";

export type NewsState = {
  allNewsPosts: NewsPostPublicAPI[];
  latestNewsPosts: NewsPostPublicAPI[];
  addNewsPostToLatest: (newPost: NewsPostPublicAPI) => void;
  addNewsPostToAll: (newPost: NewsPostPublicAPI) => void;
  removeAllNewsPosts: () => void;
};

export const useNewsState = create<NewsState>()(
  persist(
    immer((set) => ({
      allNewsPosts: [],
      latestNewsPosts: [],
      addNewsPostToAll: (newPost: NewsPostPublicAPI) =>
        set((state) => {
          state.allNewsPosts.push(newPost);
        }),
      addNewsPostToLatest: (newPost: NewsPostPublicAPI) =>
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
