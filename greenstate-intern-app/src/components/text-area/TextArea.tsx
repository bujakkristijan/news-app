import React, { forwardRef } from "react";
import { Text } from "../text/Text";
import { ErrorWrapper, LabelWrapper } from "../input/Input.styles";
import { StyledTextAreaContainer } from "./TextArea.styles";
import { StyledTextArea } from "./TextArea.styles";
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export const TextArea = forwardRef(
  (
    { label, disabled, error, ...restProps }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <StyledTextAreaContainer>
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

        <StyledTextArea
          ref={ref}
          $hasError={!!error}
          disabled={disabled}
          {...restProps}
        />

        <LabelWrapper>
          <Text fontSize="xSm" fontFamily="montserrat" lineHeight="sm">
            {label}
          </Text>
        </LabelWrapper>
      </StyledTextAreaContainer>
    );
  },
);
