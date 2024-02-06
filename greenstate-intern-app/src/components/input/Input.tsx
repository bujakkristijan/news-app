import React, { forwardRef } from "react";
import { Text } from "../text/Text";
import { ErrorWrapper, LabelWrapper, StyledInput } from "./Input.styles";
import { StyledInputContainer } from "./Input.styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = forwardRef(
  (
    { label, error, ...restProps }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <StyledInputContainer>
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

        <StyledInput ref={ref} $hasError={!!error} {...restProps} />

        <LabelWrapper>
          <Text fontSize="xSm" fontFamily="montserrat" lineHeight="sm">
            {label}
          </Text>
        </LabelWrapper>
      </StyledInputContainer>
    );
  },
);
