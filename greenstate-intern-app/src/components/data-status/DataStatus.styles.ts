import styled from "styled-components";

export const StyledDataStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 37.5rem;
  max-height: 32rem;
`;

export const StyledDataMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  // nemam na ovoj grani logiku za fill, pa padding nema smisla
  // padding: 0 6.25rem;
`;
