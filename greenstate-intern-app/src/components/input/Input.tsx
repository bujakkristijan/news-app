import React, { useState } from "react";
import { Text } from "../text/Text";
import {
  ErrorWrapper,
  LabelWrapper,
  InputWrapper,
  StyledInput,
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
        value={value}
        onChange={onChange}
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
    </InputWrapper>
  );
};
