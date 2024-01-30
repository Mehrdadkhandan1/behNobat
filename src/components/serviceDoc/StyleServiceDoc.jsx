import styled from "styled-components";

export const ServiceDocC = styled.div`
    margin-top: var(--mg-top);
    padding: 1rem ;
    .img-section{
        width: 80px;
    }
    .info-section{
        gap: 1rem;
        flex-direction: column;
        height: 100%;
    
        .name-service{
            color: ${({theme})=>theme.secondaryColor};
            font-weight: bold;
            gap: 0.5rem;
        }
        .time-service{
            gap: 0.25rem;
            font-size: var(--small-font);
            color: ${({theme})=>theme.tertiaryColor};
        }
    }
    .price{
        gap: 0.25rem;
        color: ${({theme})=>theme.primaryColor};
        font-size: var(--text-font);
    }

`