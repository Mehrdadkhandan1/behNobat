import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/ThemeContex'

const LinkButton = ({ children }) => {
    const theme = useContext(ThemeContext)
    return (
        <ButtonC theme={theme}>
            {children}
        </ButtonC>
    )
}

export default LinkButton

const ButtonC = styled.button`
    color: #fff;
    min-width: 128px;
    background-color: ${({ theme }) => theme.primaryColor};
    padding: 0.5rem 0.75rem;
    font-size: var(--text-font);
    border-radius: 0.5rem;
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    justify-content: space-evenly;
    transition: all ease-in-out 0.4s;
    @media screen  and (max-width: 960px) {
        & {
        font-size: var(--small-font);
        }
    }
`