import styled from "styled-components";

export const StyledLatestNewsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  &::-webkit-scrollbar {
    visibility: hidden;
  }
  overflow-x: auto;
`;

export const StyledAllNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.438rem, 1fr));
  gap: 1.25rem;
  justify-content: center;
`;

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.25rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
`;
