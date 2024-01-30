import styled from "styled-components";

export const GetTurnC = styled.main`
    .informition-doc{
        margin-top: var(--mg-top);
        /* right section */
        .info-doc-section {
            gap: 2rem;
            font-weight: bold;

             /* image doc */
        .img-section{
            width: 200px ;
            height: 200px;
        }
        
        .img-section img{
            object-fit: cover;
        }

        /* informition doc */
        .info-doc{
            flex-direction: column;
            /* name doc */
            p{
                color: ${({ theme }) => theme.secondaryColor};
                gap: 0.5rem;
            }
            h4{
                font-size: var(--sub-title-font);
                color: ${({ theme }) => theme.primaryColor};
            }
        }
        }

        .scocre-doc  {
            font-weight: bold;
            color: ${({ theme }) => theme.secondaryColor};

            gap: 0.25rem;
         .star-image{
            width: 30px;
         }
        }
       
    }
    .reservation{
        margin-top: var(--mg-top);
        h3{
            color: ${({ theme }) => theme.secondaryColor};
            font-size: var(--title-font);
        }    
        .reservation-section{
            margin:var(--mg-top) auto ;
            width: 80%;
            padding:  0 var(--pad-sections);
            grid-template-columns: 1fr 4fr;
        }
        .nav-reservition{
            padding:   var(--pad-sections) 0;

            border-left: 1px solid ${({ theme }) => theme.tertiaryColor};
        }
        
    }
`