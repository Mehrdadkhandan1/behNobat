import styled from "styled-components";

export const AboutC = styled.section`
    
    h2{
        color: ${({ theme }) => theme.secondaryColor};
        padding: 0.5rem 0;
        border-bottom: 2px solid ${({ theme }) => theme.secondaryColor};
        display: inline-block;
        font-size: var(--title-font);
    }
    .about{
        display: grid;
        width: 100%;
        grid-template-areas:'textAbout pictureAbout';
        margin-top: 3rem;
        gap: 2rem;
    }
    .text-about{
        grid-area: textAbout;
        p{
            font-size: var(--text-font);
        }
        .links-about{
            display: flex;
            margin-top: 2rem;
            button{font-weight: bold;}
        }
    }
    .picture-about{
    
    grid-area: pictureAbout;
    position: relative;
            width: 550px;
            height: 400px;
            max-height:400px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
        }
    }
    .picture-about::before{
        content: '';
        z-index: -1;
        position: absolute;
        background-color: ${({ theme }) => theme.primaryColor};
        opacity: .3;
        left: -1rem;
        top: -1.25rem;;
        border-radius: 0.5rem;
        width: calc(100% + 1rem);
        height: calc(100% + 1.25rem);;
}
/* responsive */
@media screen and (max-width: 960px){
    
    place-items: center;
    & 
    .picture-about{
        object-fit: cover;
        width: 380px;
    }
    .text-about{
        P{
        font-weight: bold;
        font-size:var(--small-font);
        white-space: break-spaces;
    
    }}
}
@media screen and (max-width: 768px){
    
    place-items: center;
    & .about{
        margin-top: 4rem;
        gap: 2rem;
        place-items: center;
        grid-template-areas:'pictureAbout'
                            'textAbout';
    }
    .picture-about{
        width: 80%;
        height: 300px;
    }
    .picture-about img{
        width: 100%;
    }
    .picture-about::before{
        display: none;
    }
    .text-about{
        width: 90%;
        P{
        white-space: break-spaces;
    
    }}
}

@media screen and (max-width: 500px){
    h2{
        font-size: var(--text-font);
    }
    place-items: center;
    & .about{
        margin-top: 2rem;
    }
    & 
    .picture-about{
        width: 80%;
        height: 250px;
    }
   
    .text-about{
        P{
        font-weight: bold;
        font-size:var(--small-font);
        white-space: break-spaces;
    
    }}
}

`