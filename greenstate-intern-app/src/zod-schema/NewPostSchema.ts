// schema.ts
import { z, ZodType } from "zod";
import { NewPostData } from "../new-post-form/NewPostForm";

export const NewpostSchema: ZodType<NewPostData> = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be at least 3 characters long" }),
  description: z
    .string()
    .min(10, { message: "Content should be at least 10 characters long" }),
  url: z
    .string()
    .min(3, { message: "Url should be at least 3 characters long" }),
});
