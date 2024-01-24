import React from "react";
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
  isDisabled?: boolean;
  error?: string | undefined;
  value?: string;
};

export const Input = ({
  label,
  type,
  isDisabled,
  placeholder,
  value = "",
  onChange,
  error,
  ...restProps
}: InputProps) => {
  const [isFocused, setFocused] = React.useState(false);
  const isFilled = value.trim() !== "";

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <InputWrapper>
      <LabelWrapper>
        {(isFocused || (isFilled && !error)) && !isDisabled && (
          <Label $isFocused={isFocused} $hasError={!!error}>
            {label}
          </Label>
        )}
      </LabelWrapper>

      <StyledInput
        $isDisabled={isDisabled}
        $isFocused={isFocused}
        $hasError={!!error}
        type={type}
        disabled={isDisabled}
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
