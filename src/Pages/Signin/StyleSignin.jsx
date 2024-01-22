import styled from "styled-components";

export const SigninC = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
    .signin-page::before{
        content: '';
        width: 250px;
        height: 250px;
        border-radius: 0.5rem;
        opacity: 0.5;
        position: absolute;
        left: -2rem;
        top: -2rem;
        background-color:${({ theme }) => theme.primaryColor} ;
        z-index: -1;
    }
    .signin-page::after{
        content: '';
        width: 250px;
        height: 250px;
        border-radius: 0.5rem;
        opacity: 0.5;
        position: absolute;
        right: -2rem;
        bottom: -2rem;
        background-color:${({ theme }) => theme.primaryColor} ;
        z-index: -1;
    }
    .signin-page{
    position: relative;
    margin: auto;
    background: #fff;
    border-radius: 0.5rem;
    height: 60%;
    width: 60%;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
    padding: 2rem;
}
    .signin-page nav{
        display: flex;
        font-size: var(--sub-title-font);

        flex-direction: row-reverse;
        align-items: center;
        color: ${({ theme }) => theme.primaryColor};
    }
    .change-page{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        margin-top: 1.5rem;
    }
    .change-page p{
        font-weight: bold;
        font-size: var(--sub-title-font);
        color: ${({ theme }) => theme.primaryColor};
        opacity: 0.5;
        padding: 0.75rem 1rem;
    }
    .change-page .active{
        border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
        opacity: 1;
        }

    `