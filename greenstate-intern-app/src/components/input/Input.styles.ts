import styled from "styled-components";
export const InputWrapper = styled.div`
  height: 6rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;

export const LabelWrapper = styled.div`
  height: 1.25rem;
`;

export const ErrorWrapper = styled.div`
  height: 1.25rem;
`;

export const Label = styled.label<{
  $hasError: boolean;
  $isFocused: boolean;
}>`
  display: block;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.xSm};
  color: ${({ theme, $hasError, $isFocused }) =>
    $hasError
      ? theme.colors.darkRed
      : $isFocused
        ? theme.colors.purple
        : theme.colors.darkGrey};
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.darkRed};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: ${({ theme }) => theme.typography.fontSize.xSm};
  margin-top: 0.25rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.montserrat};
`;

export const StyledInput = styled.input<{
  $hasError: boolean;
  $isFocused: boolean;
}>`
  width: 100%;
  /* height: 3.5rem; */
  line-height: ${({ theme }) => theme.typography.lineHeight.lg};
  padding: 0.625rem 1.25rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.inter};
  border: 1px solid
    ${({ $hasError, $isFocused, theme }) =>
      $hasError
        ? theme.colors.darkRed
        : $isFocused
          ? theme.colors.purple
          : theme.colors.lightGrey};
  padding: 0.625rem 1.25rem;
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
