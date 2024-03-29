import styled from "styled-components";

export const LoginC = styled.div`
    & form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .submit-login{
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
}
@media screen and (max-width: 968px){
    & .submit-login a{
        
        font-size: var(--small-font);
    }
}
@media screen and (max-width: 500px){
    & .submit-login {
        align-items: inherit;
        flex-direction: column ;
    }
}
`