import styled from "styled-components";
import { inputStyles } from "../input/Input.styles";

export const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledTextArea = styled.textarea<{
  $hasError: boolean;
}>`
  ${inputStyles};
  resize: none;
  height: 10rem;
`;
