import styled from "styled-components";
import { breakpoints } from "../../shared/breakpoints/breakpoints";
import { StyledIcon } from "../icon/icon-wrapper/StyledIcon";

export const StyledTextWrapper = styled.div`
  max-width: 10rem;
  overflow: hidden;
`;

export const StyledNavItem = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 6rem;

  ${StyledIcon} {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media ${breakpoints.mobile} {
    ${StyledTextWrapper} {
      display: none;
    }
    ${StyledIcon} {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
