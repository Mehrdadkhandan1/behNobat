import React  from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../../hooks/useContexts'

const Button = ({ children }) => {
    const theme =useThemeContext()

    return (
        <ButtonC theme={theme}>
            {children}
        </ButtonC>
    )
}

export default Button

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
   
`