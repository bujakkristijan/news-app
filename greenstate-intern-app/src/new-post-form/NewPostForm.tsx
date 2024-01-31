import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewpostSchema } from "../zod-schema/NewPostSchema";
import FormInput from "../components/form-input/FormInput";

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
      <FormInput
        label="Headline"
        type="text"
        register={register}
        placeholder="Title"
        fieldName="title"
        error={errors.title}
      />
      <FormInput
        label="Full story"
        type="text"
        register={register}
        fieldName="description"
        placeholder="Description"
        error={errors.description}
      />
      <FormInput
        label="Link"
        type="text"
        register={register}
        fieldName="url"
        placeholder="URL"
        error={errors.url}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
