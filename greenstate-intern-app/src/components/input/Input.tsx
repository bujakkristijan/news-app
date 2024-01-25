import React, { useState } from "react";
import {
  ErrorWrapper,
  LabelWrapper,
  ErrorMessage,
  InputWrapper,
  StyledInput,
  Label,
} from "./Input.styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | undefined;
};

export const Input = ({
  label,
  type,
  disabled,
  placeholder,
  value = "",
  onChange,
  error,
  ...restProps
}: InputProps) => {
  const [isFocused, setFocused] = useState(false);
  const isFilled = String(value).trim() !== "";

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <InputWrapper>
      <LabelWrapper>
        {(isFocused || (isFilled && !error)) && !disabled && (
          <Label $isFocused={isFocused} $hasError={!!error}>
            {label}
          </Label>
        )}
      </LabelWrapper>

      <StyledInput
        $isFocused={isFocused}
        $hasError={!!error}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
      <ErrorWrapper>
        {(error || isFocused) && <ErrorMessage>{error}</ErrorMessage>}
      </ErrorWrapper>
    </InputWrapper>
  );
};
