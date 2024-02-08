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
    minmax(18.438rem, 1fr)
  );
  gap: 1.25rem;
  justify-content: center;

  & > * {
    width: 100%;
  }
`;
