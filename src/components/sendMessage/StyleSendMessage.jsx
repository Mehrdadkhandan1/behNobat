import styled from "styled-components";

export const SendMessageC = styled.section`
margin-top: 3rem;
h2{
        color: ${({ theme }) => theme.secondaryColor};
        padding: 0.5rem 0;
        border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
        display: inline-block;
        font-size: var(--title-font);
    }
    
    .send-message{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 2fr 3fr;
        .inputs-message{
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
    .write-message{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    @media screen and (max-width: 768px) {
            & .send-message{
                gap: 1rem;
                grid-template-columns: 1fr;
                
            }
        }
`