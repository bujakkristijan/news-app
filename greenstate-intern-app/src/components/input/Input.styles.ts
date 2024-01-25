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
}>`
  width: 100%;
  height: 3.5rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  outline: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.inter};
  border: 1px solid
    ${({ $hasError, $isFocused, theme }) =>
      $hasError
        ? theme.colors.darkRed
        : $isFocused
          ? theme.colors.purple
          : theme.colors.lightGrey};
  color: ${({  theme }) => theme.colors.lightBlack};
  border-radius: 0.75rem;
  &:disabled{
    color: ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.greyDisabled};
    &::placeholder{
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
  &:focus {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;
