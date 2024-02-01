import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewpostSchema } from "../zod-schema/NewPostSchema";
import { Input } from "../components/input/Input";

export type NewPostData = {
  title: string;
  description: string;
  url: string;
};

export const NewPost = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewPostData>({
    // defaultValues: { description: "Some description", title: "Some title" },
    mode: "onChange",
    resolver: zodResolver(NewpostSchema),
  });

  const onSubmit: SubmitHandler<NewPostData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Headline"
        type="text"
        {...register("title")}
        placeholder="Title"
        error={errors.title?.message}
      />
      <Input
        label="Full story"
        type="text"
        {...register("description")}
        placeholder="Description"
        error={errors.description?.message}
      />
      <Input
        label="Link"
        type="text"
        {...register("url")}
        placeholder="URL"
        error={errors.url?.message}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
