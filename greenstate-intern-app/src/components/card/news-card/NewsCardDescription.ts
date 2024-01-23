import { StyledText } from "../../text/Text.styles";
import styled from "styled-components";
export const StyledNewsCardDescription = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
