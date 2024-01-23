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
        grid-template-columns: 4fr 7fr ;
        gap: 2rem;
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
                width: 50%;
                gap: 1rem;
                grid-template-columns: 1fr;
                
            }
        }
    @media screen and (max-width: 500px) {
            & .send-message{
                width: 80%;
                gap: 1rem;
                grid-template-columns: 1fr;
                
            }
        }
`