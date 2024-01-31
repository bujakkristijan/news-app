// NewPost.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewpostSchema } from "../zod-schema/NewPostSchema";
import FormInput from "../components/form-input/FormInput";

export type NewPostData = {
  title: string;
  description: string;
  url: string;
};

export const NewPost: React.FC = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<NewPostData>({
    mode: "onChange",
    resolver: zodResolver(NewpostSchema),
  });

  const onSubmit: SubmitHandler<NewPostData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Headline"
        type="text"
        register={register}
        placeholder="Title"
        fieldName="title"
        error={errors.title}
        watch={watch}
      />
      <FormInput
        label="Full story"
        type="text"
        register={register}
        fieldName="description"
        placeholder="Description"
        error={errors.description}
        watch={watch}
      />
      <FormInput
        label="Link"
        type="text"
        register={register}
        fieldName="url"
        placeholder="URL"
        error={errors.url}
        watch={watch}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPost;
