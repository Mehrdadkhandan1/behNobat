import styled from "styled-components";

export const MainC = styled.main`
    width: 80%;
    margin:  4rem auto;
    transition: all ease-in-out 0.4s;
    .heading{
        /* heading style  */
    transition: all ease-in-out 0.4s;
        display: grid;
        position: relative;
        place-items: center;
        grid-template-columns:  40% 50%;
        gap: 1rem;
        justify-content: space-between;

       /* picutre heading  */
        .picture{
        transition: all ease-in-out 0.4s;
        position: relative;
        width: 300px;
        height: 300px;  
        box-shadow: 1px 1px 2px gray;

        }
        .picture img{
        width: 100%;
        background-color:${({ theme }) => theme.secondaryColor} ;
        border-radius: 0.5rem;
        box-shadow: 0 0 6px 2px gray;    
    }
        .picture::before{
            content: '';
            border-radius: 0.5rem;
            width: 230px;
            height: 180px;
            background-color:${({ theme }) => theme.secondaryColor};
            opacity: 0.5;
            position: absolute;
            z-index: -6;
            right: -2rem;
            top: -2rem;
        } 
        .picture::after{
            border-radius: 0.5rem;
            content: '';
            width: 230px;
            height: 180px;
            background-color:${({ theme }) => theme.secondaryColor};
            opacity: 0.5;
            position: absolute;
            z-index: -6;
            left: -2rem;
            bottom: -2rem;
        } 
        /* title and subtext */

        .title-Subtext{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
                .welcome-text{
                    font-size: var(--text-font);
                    color: ${({ theme }) => theme.secondaryColor};
                }
                h1{
                    font-size: var(--title-font);
                    margin: 1.5rem 0 ;
                    color: ${({ theme }) => theme.primaryColor};

                }
                .introduction-text{
                    color: ${({ theme }) => theme.secondaryColor};
                    font-size: var(--sub-title-font);
                    font-weight: bold;

                }
                
            }
}

    /* responsive */
    @media screen and (max-width: 960px) {
        &{
            width: 90%;
        }
        & .heading .picture{
            width: 250px;
            height: 250px;  
        }
        & .heading .picture::before{
            width: 180px;
            height: 130px;
            right: -2rem;
            top: -2rem;
        } 
        & .heading .picture::after{
            border-radius: 0.5rem;
            content: '';
            width: 180px;
            height: 130px;
            background-color:${({ theme }) => theme.secondaryColor};
            opacity: 0.5;
            position: absolute;
            z-index: -6;
            left: -2rem;
            bottom: -2rem;
        } 

    }
    @media screen and (max-width: 768px) {
        &{
            width: 100%;
        }
        & .heading{
        grid-template-columns:  1fr;
        gap: 4rem;

        }
        & .heading .picture{
            width: 250px;
            height: 250px;  
        }
        & .heading .picture::before{
            width: 180px;
            height: 130px;
            right: -2rem;
            top: -2rem;
        } 
        & .heading .picture::after{
            border-radius: 0.5rem;
            content: '';
            width: 180px;
            height: 130px;
            background-color:${({ theme }) => theme.secondaryColor};
            opacity: 0.5;
            position: absolute;
            z-index: -6;
            left: -2rem;
            bottom: -2rem;
        } 

    }



`