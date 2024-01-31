import styled from "styled-components";

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

export const StyledInput = styled.input<{
  $hasError: boolean;
  $isFocused: boolean;
  $isFilled: boolean;
}>`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 1.25rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  padding: 1rem 1.25rem;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  outline: none;
  border: 1px solid
    ${({ $hasError, $isFocused, theme }) =>
      $hasError
        ? theme.colors.darkRed
        : $isFocused
          ? theme.colors.purple
          : theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.lightBlack};
  border-radius: 0.75rem;
  font-weight: ${({ theme, $hasError, $isFilled }) =>
    $isFilled && !$hasError
      ? theme.typography.fontWeight.semiBold
      : theme.typography.fontWeight.regular};
  &:disabled {
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.greyDisabled};
    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
  &:focus {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;
