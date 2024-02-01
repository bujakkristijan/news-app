import React, { useState, forwardRef } from "react";
import { LabelWrapper, ErrorWrapper, StyledTextArea } from "./TextArea.styles";
import { Text } from "../text/Text";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const TextArea = forwardRef(
  (
    { label, disabled, placeholder, error, ...restProps }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>,
  ) => {
    const [isFocused, setFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement, Element>) => {
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

        <StyledTextArea
          ref={ref}
          $isFocused={isFocused}
          $hasError={!!error}
          disabled={disabled}
          placeholder={placeholder}
          $isFilled={isFilled}
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
  },
);
