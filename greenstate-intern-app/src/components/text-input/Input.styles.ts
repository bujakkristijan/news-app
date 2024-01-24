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
  font-family: ${(props) => props.theme.typography.fontFamily.montserrat};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  font-size: ${(props) => props.theme.typography.fontSize.xSm};
  color: ${(props) =>
    props.$hasError
      ? props.theme.colors.darkRed
      : props.$isFocused
        ? props.theme.colors.purple
        : props.theme.colors.darkGrey};
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.darkRed};
  font-weight: ${(props) => props.theme.typography.fontWeight.regular};
  font-size: ${(props) => props.theme.typography.fontSize.xSm};
  margin-top: 0.25rem;
  font-family: ${(props) => props.theme.typography.fontFamily.montserrat};
`;

export const StyledInput = styled.input<{
  $hasError: boolean;
  $isFocused: boolean;
  $isDisabled?: boolean;
}>`
  width: 100%;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.typography.fontSize.md};
  outline: none;
  font-family: ${(props) => props.theme.typography.fontFamily.inter};
  background-color: ${(props) =>
    props.$isDisabled ? props.theme.colors.greyDisabled : "transparent"};
  border: 1px solid
    ${(props) => (props.$hasError ? props.theme.colors.darkRed : props.$isFocused ? props.theme.colors.purple : props.theme.colors.lightGrey)};
  padding: 0.625rem 1.25rem;
  /* border-radius: ${(props) => props.theme.typography.borderRadius.sm}; */
  border-radius: 0.75rem;
  &:focus {
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
    color: ${(props) => props.theme.colors.lightBlack};
  }
`;
