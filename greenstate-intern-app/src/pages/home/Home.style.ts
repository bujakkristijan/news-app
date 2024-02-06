import styled from "styled-components";

export const StyledNewsContainer = styled.div``;

export const StyledLatestNewsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  &::-webkit-scrollbar {
    visibility: hidden;
    height: 0.75rem;
    width: 0.75rem;
    background: #ebebeb;
  }

  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background: #cdcdcd;
    -webkit-border-radius: 3.125rem;
  }

  overflow-y: auto;
`;

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledLatestNewsCard = styled.div`
  min-width: 18.438rem;
`;
