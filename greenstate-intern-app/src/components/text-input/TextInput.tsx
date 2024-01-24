import React, { ReactNode } from "react";
import {
  ErrorWrapper,
  LabelWrapper,
  ErrorMessage,
  InputWrapper,
  StyledInput,
  Label,
} from "./TextInput.styles";

interface InputProps {
  label: string;
  type: string;
  isDisabled?: boolean;
  placeholder?: string;
  value: string;
  onChange?: () => void;
  error?: string | undefined;
  children?: ReactNode;
}

export const TextInput = ({
  label,
  type,
  isDisabled,
  placeholder,
  value,
  onChange,
  error,
  children,
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

  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     onChange(event.target.value);
  //   };

  return (
    <InputWrapper>
      <LabelWrapper>
        {(isFocused || (isFilled && !error)) && !isDisabled && (
          <Label isFocused={isFocused} hasError={!!error}>
            {label}
          </Label>
        )}
      </LabelWrapper>

      <StyledInput
        isDisabled={isDisabled}
        isFocused={isFocused}
        hasError={!!error}
        type={type}
        disabled={isDisabled}
        placeholder={placeholder}
        value={value}
        // onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
      <ErrorWrapper>
        {(error || isFocused) && <ErrorMessage>{error}</ErrorMessage>}
      </ErrorWrapper>

      {children}
    </InputWrapper>
  );
};
