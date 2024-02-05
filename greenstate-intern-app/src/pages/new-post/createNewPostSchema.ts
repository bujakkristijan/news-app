import { z } from "zod";

export const newPostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters long" }),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters long" }),
  url: z
    .string()
    .min(3, { message: "Url should be at least 3 characters long" }),
});

export type NewPostData = z.infer<typeof newPostSchema>;

type FormNames<T> = {
  [name in keyof T]: name;
};

export const formFieldNames: FormNames<NewPostData> = {
  title: "title",
  description: "description",
  url: "url",
};
