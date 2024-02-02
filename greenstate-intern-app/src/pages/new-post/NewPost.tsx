import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewpostSchema } from "../../zod-schema/NewPostSchema";
import { Input } from "../../components/input/Input";
import { TextArea } from "../../components/text-area/TextArea";
import {
  ButtonWrapper,
  StyledNewPostContainer,
  TextWrapper,
} from "./NewPost.styled";
import { Text } from "../../components/text/Text";
import { Button } from "../../components/button/Button";
import { StyledForm } from "./NewPost.styled";
import { NewPostFields } from "../../zod-schema/NewPostSchema";

export const NewPost = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewPostFields>({
    mode: "onChange",
    resolver: zodResolver(NewpostSchema),
  });

  const onSubmit: SubmitHandler<NewPostFields> = (data) => {
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
          {...register("title")}
          placeholder="Title"
          error={errors.title?.message}
        />
        <TextArea
          label="Full story"
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
        <ButtonWrapper>
          <Button type="submit" size="md" color="white" fill={true}>
            Create post
          </Button>
        </ButtonWrapper>
      </StyledForm>
    </StyledNewPostContainer>
  );
};
