import styled, { css } from "styled-components";
import { StyledText } from "../text/Text.styles";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const LabelWrapper = styled.div`
  height: 1rem;
  margin-bottom: 0.25rem;
  margin-left: 0.5rem;
`;

export const ErrorWrapper = styled.div`
  height: 1rem;
  margin-top: 0.25rem;
  margin-left: 0.5rem;
`;

export const inputStyles = css<{ $hasError: boolean }>`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 1.25rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  outline: none;
  color: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 0.75rem;

  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.greyDisabled};

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  &:placeholder-shown {
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  }

  &:not(:placeholder-shown) {
    font-weight: ${({ theme, $hasError }) =>
      !$hasError
        ? theme.typography.fontWeight.semiBold
        : theme.typography.fontWeight.regular};
    &:focus {
      font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    }

    &:not(:focus) + ${LabelWrapper} {
      visibility: ${({ $hasError }) => ($hasError ? "hidden" : "visible")};
    }
  }

  &:not(:focus) {
    border: 1px solid
      ${({ $hasError, theme }) =>
        $hasError ? theme.colors.darkRed : theme.colors.lightGrey};

    + ${LabelWrapper} ${StyledText} {
      color: ${({ theme, $hasError }) =>
        $hasError ? theme.colors.darkRed : theme.colors.grey};
    }

    &:placeholder-shown + ${LabelWrapper} {
      visibility: hidden;
    }
  }

  &:focus {
    color: ${({ theme }) => theme.colors.lightBlack};
    border: 1px solid
      ${({ $hasError, theme }) =>
        $hasError ? theme.colors.darkRed : theme.colors.purple};

    + ${LabelWrapper} ${StyledText} {
      color: ${({ theme, $hasError }) =>
        $hasError ? theme.colors.darkRed : theme.colors.purple};
    }
  }
`;

export const StyledInput = styled.input<{ $hasError: boolean }>`
  ${inputStyles};
`;