import styled from "styled-components";
import { StyledText } from "../../text/Text.styles";

export const StyledNewsCard = styled.div`
  min-width: 16.338rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledNewsCardDescription = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const StyledCardImage = styled.img`
  height: 10rem;
  object-fit: cover;
  width: 100%;
  border-radius: 0.75rem;
`;
export const StyledNewsCardTitle = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`;

export const StyledChipContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
