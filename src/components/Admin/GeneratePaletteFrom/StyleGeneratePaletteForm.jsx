import styled from "styled-components";

export const GeneratePaletteFormC = styled.section`
margin-top: 2rem;
        h3{
            color:${({ theme }) => theme.secondaryColor} ;
            font-size: var(--sub-title-font);
            margin: 2rem 0;
        }
    .inputs-palette{
        gap: 1rem;
        flex-wrap: wrap;
        .palette{
        flex-wrap: wrap;

            gap: 1rem;
            #secondaryColor{
                box-shadow: inset 0 0 0 22px ${({ theme }) => theme.secondaryColor};
              }
            #primaryColor{
                box-shadow: inset 0 0 0 22px ${({ theme }) => theme.primaryColor};
              }
            #tertiaryColor{
                box-shadow: inset 0 0 0 22px ${({ theme }) => theme.tertiaryColor};
              }
            input{
                padding: 0;
                margin: 0;
                outline: 0;
                border-radius: 2px;
                width: 40px;
                border: 0;
                height: 40px;
             
            }
            ::-webkit-color-swatch{
                border:none;
            }
        }
        .colors{
            display: flex;
            align-items: center;
            gap: 1rem;
        }
     
    }
`