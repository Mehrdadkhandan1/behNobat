import styled from "styled-components";

export const SignUpC = styled.section`
    & form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .submit-signup{
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
}
@media screen and (max-width: 500px){
    & .submit-signup {
        align-items: inherit;
        flex-direction: column ;
    }
}
`