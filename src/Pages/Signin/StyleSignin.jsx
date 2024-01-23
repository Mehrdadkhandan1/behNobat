import styled from "styled-components";

export const SigninC = styled.section`
transition: all ease-in-out 0.4s;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .signin-page::before{
transition: all ease-in-out 0.4s;

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
transition: all ease-in-out 0.4s;

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
transition: all ease-in-out 0.4s;

    position: relative;
    margin: auto;
    background: #fff;
    border-radius: 0.5rem;
    min-height: 60%;
    width: 70%;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.25);
    padding: 2rem;
}
    .signin-page nav{
transition: all ease-in-out 0.4s;
 
        display: flex;
        font-size: var(--sub-title-font);

        flex-direction: row-reverse;
        align-items: center;
        color: ${({ theme }) => theme.primaryColor};
    }
    .change-page{
transition: all ease-in-out 0.4s;

        display: flex;
        align-items: center;
        
        justify-content: space-between;

        margin-top: 1.5rem;
    }
    .change-page p{
transition: all ease-in-out 0.4s;

        font-weight: bold;
        font-size: var(--sub-title-font);
        color: ${({ theme }) => theme.primaryColor};
        opacity: 0.5;
        padding: 0.75rem 1rem;
    }
    .change-page .active{
transition: all ease-in-out 0.4s;
        border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
        opacity: 1;
        }
        .show-pages-signin{
transition: all ease-in-out 0.4s;

            margin: auto;
            width: 50%;
        }
        .outlet{
transition: all ease-in-out 0.4s;

            margin-top: 2.5rem;
        }
        @media screen and (max-width:1080px) {
            .show-pages-signin{
                width: 70%;
            }
        }
        @media screen and (max-width:768px) {
           .signin-page{
            width: 75%;
           }
           .signin-page::before , .signin-page::after{
                width: 200px;
                height: 200px;
            }
            .show-pages-signin{
                width: 100%;
                
            }
        }
        @media screen and (max-width:500px) {
            .signin-page{
                width: 90%;
            }
            .signin-page::before , .signin-page::after{
                width: 150px;
                height: 150px;
            }

            .show-pages-signin{
                width: 100%;
            }
        }

    `