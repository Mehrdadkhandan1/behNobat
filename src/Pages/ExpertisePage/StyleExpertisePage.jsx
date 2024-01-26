import styled from "styled-components";

export const ExpertisePageC = styled.main`
        transition: all ease-in-out 0.4s;

    margin-top: 3rem;
    nav{

        transition: all ease-in-out 0.4s;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .select-expertise{

        transition: all ease-in-out 0.4s;
        display: flex;
        align-items: center;
        font-size: var(--sub-title-font);
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        background-color: ${({ theme }) => theme.primaryColor + '40'} ;
        color: ${({ theme }) => theme.primaryColor} ;
        
        img{

            transition: all ease-in-out 0.4s;
            width: 32px;
        }
    }
    .expertises{
        transition: all ease-in-out 0.4s;
        margin-top: 3rem;
        justify-self: center;
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
        
    }
    @media screen and (max-width: 768px){
        nav{
            flex-direction: column-reverse;
            width: 70%;
            gap: 1rem;
        }
        .select-expertise{
            font-size: var(--text-font);
                gap: 0.5rem;
                padding: 0.5rem;
        
                img{
                    width: 24px;
                }    }

        
         .expertises{
            justify-content: center;
        }
    }
    @media screen and (max-width:550px) {
        nav{
        align-items:center;
        width: 100%;
    }
        .expertises{
            justify-content: center;
        }

    }
    
`