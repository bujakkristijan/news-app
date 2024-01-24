import styled from "styled-components";
import { StyledText } from "../../text/Text.styles";
export const StyledNewsCardDescription = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const StyledCardImage = styled.img`
  height: 11.25rem;
  object-fit: cover;
  width: 100%;
  border-radius: 0.5rem;
`;
export const StyledNewsCardTitle = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StyledChipContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
