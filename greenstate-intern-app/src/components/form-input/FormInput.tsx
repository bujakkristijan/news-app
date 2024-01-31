// FormInput.tsx
import React from "react";
import { UseFormRegister, UseFormWatch, FieldError } from "react-hook-form";
import { Input } from "../input/Input";
import { NewPostData } from "../../new-post-form/NewPostForm";

type FormInputProps = {
  label: string;
  register: UseFormRegister<NewPostData>;
  watch: UseFormWatch<NewPostData>; // Add watch as a prop
  fieldName: Extract<keyof NewPostData, string>;
  error?: FieldError | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({
  label,
  register,
  watch,
  fieldName,
  error,
  ...inputProps
}: FormInputProps) => {
  return (
    <div>
      <Input
        label={label}
        register={register(fieldName)}
        watch={watch} // Pass watch as a prop
        fieldName={fieldName}
        {...inputProps}
        error={error?.message}
      />
    </div>
  );
};

export default FormInput;
