import styled from "styled-components";

export const ProfileAdminC = styled.div`
    display: flex;
    gap: 1rem ;
    border-bottom: 1px solid gray;
    padding-bottom: 2rem  ;
    .profile{
        width: 65px;
        height: 65px;
        object-fit: cover;    
    }
    .information{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        .name{
            color: ${({ theme }) => theme.primaryColor};
        }
        .expertise{
        font-size: var(--small-font);
    }

    }
`