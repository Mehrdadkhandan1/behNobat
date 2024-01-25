import styled from "styled-components";

export const ExpertsC = styled.main`
     margin-top: 3rem;
    nav{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .select-expertise{
        display: flex;
        align-items: center;
        font-size: var(--sub-title-font);
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        background-color: ${({ theme }) => theme.primaryColor + '40'} ;
        color: ${({ theme }) => theme.primaryColor} ;
        
        img{
            width: 32px;
        }
    }
`