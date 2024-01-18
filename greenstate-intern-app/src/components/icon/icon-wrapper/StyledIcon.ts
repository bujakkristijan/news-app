import styled from "styled-components";

interface StyledIconProps {
    size: string;
  }

export const StyledIcon = styled.div<StyledIconProps>`
  width: ${(props) => props.size };
  height: ${(props) => props.size};
`;
