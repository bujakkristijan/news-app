import styled from "styled-components";

interface StyledIconProps {
    width: string;
    height: string;
    color: string;
  }

export const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width };
  height: ${(props) => props.height};
  fill: ${(props) => props.color };
`;
