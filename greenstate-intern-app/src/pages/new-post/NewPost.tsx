import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPostSchema } from "./createNewPostSchema";
import { Input } from "../../components/input/Input";
import { TextArea } from "../../components/text-area/TextArea";
import { StyledNewPostContainer, TextWrapper } from "./NewPost.styled";
import { Text } from "../../components/text/Text";
import { Button } from "../../components/button/Button";
import { StyledForm } from "./NewPost.styled";
import { NewPostData, formFieldNames } from "./createNewPostSchema";
import { useNewsState } from "../../store/useNewsState";
import { formatDate } from "../../helper/format-date/formatDate";
import { generateUniqueId } from "../../helper/generate-unique-id/generateUniqueId";
import { alertError, alertSuccess } from "../../shared/alert/alert";

export const NewPost = () => {
  const { addNewsPost } = useNewsState();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<NewPostData>({
    mode: "onChange",
    resolver: zodResolver(newPostSchema),
  });

  const onSubmit = async (data: NewPostData) => {
    try {
      addNewsPost({
        ...data,
        date: formatDate(new Date().toString()),
        id: generateUniqueId(),
      });
      await alertSuccess("Succesfully added new post!");
      reset();
    } catch (error) {
      alertError("Something went wrong, try again!");
    }
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
