import styled from "styled-components";

export const StyledAllNewsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledAllNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(295px, 1fr)
  ); /* Minimum width of 295px, but allowing flexible resizing */
  gap: 1.25rem;
  justify-content: center;

  & > * {
    width: 100%;
  }
`;
