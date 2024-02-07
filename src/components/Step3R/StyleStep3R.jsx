import styled from "styled-components";


export const Step3RC = styled.section`
        h4{
        color: ${({ theme }) => theme.secondaryColor};
        font-size: var(--sub-title-font);
    }
    .form-user-info{
        margin-top: 3rem;
        display:grid;
        width: 80%;
        grid-template-columns: 1fr 1fr;
        gap :2rem ;
        
    }
    @media screen and (max-width:550px) {
        .form-user-info{
        grid-template-columns: 1fr;
        margin: 2rem auto;
        }
    }
`