import styled from "styled-components";
import { inputStyles } from "../input/Input.styles";
import { Height } from "../../shared/types/height";

export const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledTextArea = styled.textarea<{
  $hasError: boolean;
  $height: Height;
}>`
  ${inputStyles};
  resize: none;
  height: ${({ $height }) => $height};
`;
