import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPostSchema } from "./createNewPostSchema";
import { Input } from "../../components/input/Input";
import { TextArea } from "../../components/text-area/TextArea";
import { StyledNewPostContainer, TextWrapper } from "./NewPost.styled";
import { Text } from "../../components/text/Text";
import { Button } from "../../components/button/Button";
import { StyledForm } from "./NewPost.styled";
import { NewPostData } from "./createNewPostSchema";
import { formFieldNames } from "./createNewPostSchema";
import { useNewsState } from "../../store/useNewsState";

export const NewPost = () => {
  const { addNewsPost } = useNewsState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewPostData>({
    mode: "onChange",
    resolver: zodResolver(newPostSchema),
  });

  const onSubmit: SubmitHandler<NewPostData> = (data) => {
    //url za sliku kada dodajem novi post: src/assets/images/news-image.png
    addNewsPost({ ...data, date: convertDateFormat(new Date().toString()) });
    console.log(data);
  };

  return (
    <StyledNewPostContainer>
      <TextWrapper>
        <Text fontWeight="extraBold" lineHeight="lg" fontSize="lg">
          New post
        </Text>
      </TextWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Headline"
          type="text"
          {...register(formFieldNames.title)}
          placeholder="Title"
          error={errors[formFieldNames.title]?.message}
        />
        <TextArea
          label="Full story"
          {...register(formFieldNames.description)}
          placeholder="Description"
          error={errors[formFieldNames.description]?.message}
        />
        <Input
          label="Link"
          type="text"
          {...register(formFieldNames.url)}
          placeholder="URL"
          error={errors[formFieldNames.url]?.message}
        />
        <Button type="submit" size="xlg" color="white" fill={true}>
          Create post
        </Button>
      </StyledForm>
    </StyledNewPostContainer>
  );
};
