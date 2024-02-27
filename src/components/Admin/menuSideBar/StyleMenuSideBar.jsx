import styled from "styled-components";


export const MenuSideBarC = styled.nav`
    margin-top: 1rem;
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .list-item{
            display: flex;
            align-items: center;
            gap: 1rem;
            .icon-list{
                font-size: 24px;
            }
        }
    }
`