import styled from "styled-components";

export const ExperienceC = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 1rem;
    margin: 0.25rem;
    box-shadow: 0 0 4px 3px #5252526c;
    border-radius: 0.5rem;
    gap: 1rem;
    .picture-experience{
        max-width: 180px;
    }
    .name-experience{
        font-weight: bold;
        color: ${({theme})=>theme.primaryColor};
    }
    .number-experts{
        font-size: var(--small-font);
        color: ${({theme})=>theme.tertiaryColor};
    }
    @media screen and (max-width:500px) {
        & {
            width: 90%;
        }
    }
`