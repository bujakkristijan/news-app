import styled from "styled-components";

export const StyledChip = styled.div`
    display: flex;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: ${(props)=> props.theme.typography.borderRadius.chip};
    background-color: ${(props)=> props.theme.typography.colors.primaryBg};
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.10);
`