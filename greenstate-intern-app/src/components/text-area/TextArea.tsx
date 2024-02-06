import React, { forwardRef } from "react";
import { Text } from "../text/Text";
import { ErrorWrapper, LabelWrapper } from "../input/Input.styles";
import { StyledTextAreaContainer } from "./TextArea.styles";
import { StyledTextArea } from "./TextArea.styles";
import { Height } from "../../shared/types/height";
type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  height?: Height;
};

export const TextArea = forwardRef(
  (
    { label, error, height = "10rem", ...restProps }: TextAreaProps,
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
          $height={height}
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
