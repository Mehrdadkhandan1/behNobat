import styled from "styled-components";

export const ExperienceC = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 1rem;
    margin: 0.25rem;
    max-width: 300px;
    box-shadow: 0 0 8px 2px #5252526c;
    border-radius: 0.5rem;
    gap: 1rem;
    .picture-experience{
        max-width: 180px;
    }
    .picture-experience img{
        width: 100%;
    }
    .name-experience{
        font-weight: bold;
        color: ${({ theme }) => theme.primaryColor};
    }
    .number-experts{
        font-size: var(--small-font);
        color: ${({ theme }) => theme.tertiaryColor};
    }
    @media screen and (max-width:960px) {
        & {
            max-width: 250px;
            .picture-experience{
               max-width: 130px;
             }
        }
    }
    @media screen and (max-width:500px) {
        & {
            max-width: 250px;
            .picture-experience{
               max-width: 150px;
             }
        }

    }
`