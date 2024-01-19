import styled from "styled-components";

export const HeaderC = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* logo style */
    .logo img{
        width: 150px;
    }
    /* btn stlye */
    .signup{
        display: flex;
        gap: 0.5rem;
    }
    .login{
        
        background-color: #43424237;
        border: 0;
        padding: 0.5rem 0.75rem;
        min-width: 96px;
        border-radius: 0.5rem;
        color: #fff;
        color: ${({ theme }) => theme.primaryColor};

    }
    .menu{
        display: none;
    }
    @media screen and (max-width: 550px) {
        & .signup{
            display: none;
        }
        & .menu{
            display: inherit;
            color: ${({ theme }) => theme.tertiaryColor};
            font-size: 1.5rem;
        }
    } 



`