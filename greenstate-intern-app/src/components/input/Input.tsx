import React, { useState, forwardRef } from "react";
import { Text } from "../text/Text";
import { ErrorWrapper, LabelWrapper, StyledInput } from "./Input.styles";
import { UseFormRegister } from "react-hook-form";
import { NewPostData } from "../../new-post-form/NewPostForm";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  register?: UseFormRegister<NewPostData>;
};

export const Input = forwardRef(
  (
    {
      label,
      type,
      disabled,
      placeholder,
      register,
      error,
      ...restProps
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const [isFocused, setFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      setFocused(false);
      setIsFilled(!!e.target.value);
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
          ref={ref}
          $isFocused={isFocused}
          $hasError={!!error}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          $isFilled={isFilled}
          {...register}
          {...restProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
  }
);
