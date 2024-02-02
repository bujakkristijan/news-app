import { z } from "zod";

export const NewpostSchema = z.object({
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

export type NewPostFields = z.infer<typeof NewpostSchema>;
