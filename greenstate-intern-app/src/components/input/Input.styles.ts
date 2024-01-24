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
  $isDisabled?: boolean;
}>`
  width: 100%;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  outline: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.inter};
  background-color: ${({ $isDisabled, theme }) =>
    $isDisabled ? theme.colors.greyDisabled : "transparent"};
  border: 1px solid
    ${({ $hasError, $isFocused, theme }) =>
      $hasError
        ? theme.colors.darkRed
        : $isFocused
          ? theme.colors.purple
          : theme.colors.lightGrey};
  padding: 0.625rem 1.25rem;
  color: ${({ $isDisabled, theme }) =>
    $isDisabled ? theme.colors.lightGrey : theme.colors.lightBlack};;
  border-radius: 0.75rem;
  &:focus {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.lightBlack};
  }
`;
