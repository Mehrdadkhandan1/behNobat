import styled from "styled-components";

export const Step4RC = styled.section`
     h4{
        color: ${({ theme }) => theme.secondaryColor};
        font-size: var(--sub-title-font);
    }
    h5{
        color: ${({ theme }) => theme.primaryColor};
        font-size: var(--sub-title-font);

        }
    p{
        color: ${({ theme }) => theme.tertiaryColor};

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .user-info{
        margin-top: 3rem;
    }
    .service-information,.user-info{
        margin-top: 3rem;
    }   
    .informition,.information-s{
            margin-top: 2rem;
            width: 80%;
            gap: 2rem 0;
            grid-template-columns: 1fr 1fr;
        }
    .price-service ,.name-doc{
        font-weight: bold;
        margin: 3rem 0;
    }
`