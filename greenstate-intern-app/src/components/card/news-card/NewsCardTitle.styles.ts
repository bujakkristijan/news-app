import styled from "styled-components";
import { StyledText } from "../../text/Text.styles";
export const StyledNewsCardTitle = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
