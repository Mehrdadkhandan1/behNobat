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
    /* reservition  */
    .reservation{
        margin-top: var(--mg-top);
        h3{
            color: ${({ theme }) => theme.secondaryColor};
            font-size: var(--title-font);
        }    
        .reservation-section{
            margin:var(--mg-top) auto ;
            padding-right: var(--pad-sections);
            grid-template-columns: 230px 1fr;
        }
        /* navbar reservation */
        .nav-reservition{
            width: 230px;
            h4{
            color: ${({ theme }) => theme.secondaryColor};
            font-size: var(--sub-title-font);


            }
            padding:   var(--pad-sections) 0;

            border-left: 1px solid ${({ theme }) => theme.tertiaryColor};
            .stages ul{
            padding:  2rem 1rem;
            gap: 2rem;
            flex-direction: column;
            list-style-type: decimal;
            
            li a{
                color: ${({ theme }) => theme.tertiaryColor};
            }
            li::marker{
                color: ${({ theme }) => theme.tertiaryColor};
                
            }

        }
        }
        .show-outlet{
            padding: var(--pad-sections);
        }

   

    }

`