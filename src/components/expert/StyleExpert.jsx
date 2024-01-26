import styled from "styled-components";

export const ExpertC = styled.div`
    transition: all ease-in-out 0.4s;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 0.5rem;
    min-width: 300px;
    padding: 0.5rem;
    color: #fff;
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.25);
    .picture-expert{
        transition: all ease-in-out 0.4s;
        margin: auto;
        width: 230px;
        height:230px ;
    }
    .picture-expert img{
        transition: all ease-in-out 0.4s;

        border-radius: 0.5rem;

        width: 100%;
        object-fit: cover;
        height: 100%;
    }
    .informition{
        transition: all ease-in-out 0.4s;

        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem ;
    }
    .informition p{
        transition: all ease-in-out 0.4s;

        display: flex;
        align-items:center;
        gap: 0.5rem;
    }
    .star span img {
        transition: all ease-in-out 0.4s;

        width: 1.5rem;
    }
    .more-data button{
        color: #d9d9d9;
        background-color: transparent;
        width: 100% !important;
    }
    @media screen and (max-width: 768px) {
        &{
            min-width: 225px;
            .picture-expert{                
                width: 190px;
                height:190px ;
            }
            .informition p{
                font-size: var(--small-font);
            }
            .star span img{
                width: 1.25rem;
            }
        }
    }
    @media screen and (max-width: 550px){
        &{
            min-width: 300px;
        .picture-expert{
            transition: all ease-in-out 0.4s;
            margin: auto;
            width: 250px;
            height:250px ;
    }
    .informition p{
                font-size: var(--text-font);
            }

        }
    }
`