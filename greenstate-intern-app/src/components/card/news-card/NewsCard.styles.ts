import styled from "styled-components";

export const StyledNewsCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  .card-image {
    object-fit: cover;
    width: 100%;
    border-radius: 0.5rem;
  }
  .chip-container {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;
