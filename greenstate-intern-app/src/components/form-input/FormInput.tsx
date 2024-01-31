import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { Input } from "../input/Input";
import { NewPostData } from "../../new-post-form/NewPostForm";

type FormInputProps = {
  label: string;
  register: UseFormRegister<NewPostData>;
  fieldName: Extract<keyof NewPostData, string>;
  error?: FieldError | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({
  label,
  register,
  error,
  fieldName,
  ...inputProps
}: FormInputProps) => {
  return (
    <div>
      <Input
        label={label}
        register={register(fieldName)}
        {...inputProps}
        error={error?.message}
      />
    </div>
  );
};
