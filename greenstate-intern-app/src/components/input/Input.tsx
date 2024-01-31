import React, { useState } from "react";
import { Text } from "../text/Text";
import { ErrorWrapper, LabelWrapper, StyledInput } from "./Input.styles";
import { UseFormRegister } from "react-hook-form";
import { NewPostData } from "../../new-post-form/NewPostForm";
import { useForm } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  register: UseFormRegister<NewPostData>;
  fieldName: Extract<keyof NewPostData, string>;
  watch: (field: string) => any;
};

export const Input = ({
  label,
  type,
  disabled,
  placeholder,
  register,
  error,
  watch,
  fieldName,
  ...restProps
}: InputProps) => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    checkIsFilled();
    console.log("ERROR: " + error);
    console.log("IS FILLED: " + isFilled);
  };

  const checkIsFilled = () => {
    const inputValue = watch(fieldName);
    setIsFilled(!!inputValue);
    console.log("Input value: " + JSON.stringify(inputValue));
  };

  return (
    <div>
      <LabelWrapper>
        {(isFocused || (isFilled && !error)) && !disabled && (
          <Text
            fontSize="xSm"
            color={error ? "darkRed" : isFocused ? "purple" : "darkGrey"}
            fontFamily="montserrat"
            lineHeight="sm"
          >
            {label}
          </Text>
        )}
      </LabelWrapper>

      <StyledInput
        $isFocused={isFocused}
        $hasError={!!error}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
      <ErrorWrapper>
        {error && (
          <Text
            fontSize="xSm"
            color="darkRed"
            fontFamily="montserrat"
            lineHeight="sm"
          >
            {error}
          </Text>
        )}
      </ErrorWrapper>
    </div>
  );
};
