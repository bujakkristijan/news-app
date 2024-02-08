import styled from "styled-components";
import { breakpoints } from "../../shared/breakpoints/breakpoints";

export const StyledNavigation = styled.div`
  display: flex;
  padding: 1.5rem 4rem;
  justify-content: center;
  align-items: center;
  gap: 7.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.25rem 1.25rem 0 rgba(16, 24, 40, 0.1);
  @media ${breakpoints.mobile} {
    gap: 3rem;
  }
`;
