import styled from "styled-components";

export const StyledDataStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  max-width: 37.5rem;
  width: 100%;
`;

export const StyledDataMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  overflow-y: auto;

  @media (max-height: 573px) {
    padding-top: 15rem;
    padding-bottom: 5rem;
  }

  @media (max-height: 420px) {
    padding-top: 20rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  // TODO: After fill prop logic add padding
  // padding: 0 6.25rem;
`;
