import styled from "styled-components";

export const StyledHeadline = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledLine = styled.div`
  margin-top: 0.5rem;
  height: 0.25rem;
  width: 7.5rem;
  background: linear-gradient(
    271deg,
    ${({ theme }) => theme.colors.darkBlue} -8.54%,
    ${({ theme }) => theme.colors.lightBlue} 103.39%
  );
  border-radius: 62.5rem;
`;
