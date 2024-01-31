// FormInput.tsx
import React from "react";
import { UseFormRegister, UseFormWatch, FieldError } from "react-hook-form";
import { Input } from "../input/Input";
import { NewPostData } from "../../new-post-form/NewPostForm";

type FormInputProps = {
  label: string;
  register: UseFormRegister<NewPostData>;
  fieldName: Extract<keyof NewPostData, string>;
  error?: FieldError | undefined;
  defValues?: any;
  //   watch: UseFormWatch<NewPostData>; // Add watch as a prop
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({
  label,
  register,
  error,
  fieldName,
  //   watch,
  defValues,
  ...inputProps
}: FormInputProps) => {
  return (
    <div>
      <Input
        label={label}
        register={register(fieldName)}
        {...inputProps}
        // fieldName={fieldName}
        // watch={watch} // Pass watch as a prop
        error={error?.message}
        defValue={defValues(fieldName)}
      />
    </div>
  );
};

export default FormInput;
