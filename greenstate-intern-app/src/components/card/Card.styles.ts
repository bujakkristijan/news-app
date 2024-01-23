import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  width: 300px;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: antiquewhite;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.lightestGrey};
  background: ${(props) => props.theme.colors.white};
`;
