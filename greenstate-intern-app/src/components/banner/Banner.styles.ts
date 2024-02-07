import styled from "styled-components";
import { breakpoints } from "../../shared/data/breakpoints/breakpoints";

export const StyledHomeBanner = styled.div`
  min-height: 8.938rem;
  border-radius: 1rem;
  background: linear-gradient(271deg, #2249af -8.54%, #2d99e7 103.39%);
  padding: 1.5rem 4rem 1.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media ${breakpoints.tablet} {
    padding-right: 1.5rem;
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledImageHomeBanner = styled.img`
  max-height: 5.938rem;
`;
