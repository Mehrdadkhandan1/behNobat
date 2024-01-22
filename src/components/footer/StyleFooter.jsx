import styled from "styled-components";

export const FooterC = styled.footer`
     margin-top: 3rem;
     background-color: ${({ theme }) => theme.primaryColor};
     padding: 1rem;
    border-radius: 0.5rem;
     .footer-data{
        color: #fff;
         display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .sction-footer{
        display: flex;
        flex-direction:column ;
        gap: 1rem;
    }
    .sction-footer h4{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }   
    .item-section-footer{
        display: flex;
        flex-direction:column ;
        gap: 1rem;
    }
    .item-section-footer p{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .item-section-footer p svg{
        font-size: var(--title-font);
    }
    .social-media img {
        width: var(--sub-title-font);
    }
 
    .location img {
        width: 100%;
        height: 200px;
        border-radius: 0.5rem;
    }
    .programmers{
        margin-top: 1rem;
        border-top: 1px solid ${({ theme }) => theme.tertiaryColor};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 0.5rem;
        font-size: var(--text-font);
        color: ${({ theme }) => theme.tertiaryColor};
    }
@media screen and (max-width: 960px) {
    & .item-section-footer p {
        font-size: var(--small-font);
    }
}
@media screen and (max-width: 768px) {
    & .footer-data{
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
    .location img {
        height: 150px;
    }
    .programmers{
        font-size: var(--small-font);
    }
  
}
@media screen and (max-width: 500px) {
    & .footer-data{
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
  
}
     `