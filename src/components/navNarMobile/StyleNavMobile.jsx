import styled from "styled-components";

export const NavBar = styled.nav`
    display: none;
    @media screen and (max-width:550px) {
    & {
        display: block;
        position: fixed;
        left: ${({ open }) => open ? '100%' : '-100%'};
        height: 100%;
        
    }    
    }
`