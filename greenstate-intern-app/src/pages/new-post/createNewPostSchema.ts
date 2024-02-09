import { z } from "zod";
import { FormNames } from "../../shared/types/form/formNames";
export const newPostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters long" }),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters long" }),
  image_url: z
    .string()
    .min(3, { message: "Url should be at least 3 characters long" }),
});

export type NewPostData = z.infer<typeof newPostSchema>;

export const formFieldNames: FormNames<NewPostData> = {
  title: "title",
  description: "description",
  image_url: "image_url",
};
