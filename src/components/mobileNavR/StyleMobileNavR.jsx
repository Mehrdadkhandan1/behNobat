import styled from "styled-components";

export const MobileNavRC = styled.nav`
display: none;
grid-template-columns: 0.5fr 1fr ;
    border-bottom: 1px solid gray;
    padding: 2rem 1rem ;
    h4{
        color: ${({ theme }) => theme.secondaryColor};
    }
    ul{
        gap: 2rem ;
    }
    ul li{
        list-style: none;
        display: flex;
        flex-direction: row-reverse;
        gap: 0.25rem;
    }
    ul li a{
        display: none;

    }
    ul li a.active  {
        display: inherit;
        color: ${({ theme }) => theme.primaryColor};

    }
    ul li a.active + span{
        color: ${({ theme }) => theme.primaryColor};

    }
    @media screen and (max-width: 768px) {

            &{
                display: inherit;
            }
            & ul{
                font-size: var(--small-font);

            }
    }


    @media screen and (max-width:550px) {
        &{
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem 0.5rem;
            ul{
                justify-content: center;
                gap: 1rem;
            }

        }    
        
    }

    
`