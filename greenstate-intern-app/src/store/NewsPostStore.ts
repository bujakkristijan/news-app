import { create } from 'zustand';
import { NewPostFields } from '../zod-schema/NewPostSchema';

type NewsStoreState = {
    newsPosts: NewPostFields[];
    addNewsPost: (newPost: NewPostFields) => void;
    removeAllNewsPosts: () => void;
  }

  export const useNewsStore = create<NewsStoreState>((set) => ({
    newsPosts: [],
    addNewsPost: (newPost) => set((state) => ({ newsPosts: [...state.newsPosts, newPost] })),
    removeAllNewsPosts: () => set({ newsPosts: [] }),
  }));
