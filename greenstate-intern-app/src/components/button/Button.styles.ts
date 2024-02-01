import styled from "styled-components";
import { TypographyButtonSize } from "../../shared/theme/theme";

export const StyledButton = styled.button<{
  size: TypographyButtonSize;
  $fill?: boolean;
}>`
  padding: ${({ theme, size }) => theme.typography.buttonSizes[size].padding};
  border-radius: ${({ theme, size }) =>
    theme.typography.buttonSizes[size].borderRadius};
  background-color: ${({ theme }) => theme.colors.purple};
  width: ${({ $fill }) => ($fill ? "100%" : "fit-content")};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    cursor: not-allowed;
  }
`;
