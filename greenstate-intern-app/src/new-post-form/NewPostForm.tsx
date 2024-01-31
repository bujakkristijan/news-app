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
    // watch,
    formState: { errors },
    getValues,
  } = useForm<NewPostData>({
    defaultValues: { description: "Some description", title: "Some title" },
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
        // watch={watch}
        error={errors.title}
        defValues={getValues}
      />
      <FormInput
        label="Full story"
        type="text"
        register={register}
        fieldName="description"
        placeholder="Description"
        // watch={watch}
        error={errors.description}
        defValues={getValues}
      />
      <FormInput
        label="Link"
        type="text"
        register={register}
        fieldName="url"
        placeholder="URL"
        // watch={watch}
        error={errors.url}
        defValues={getValues}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPost;
