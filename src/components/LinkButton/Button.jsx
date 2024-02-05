import React  from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../../hooks/useContexts'

const LinkButton = ({ children, secend }) => {
    const theme =useThemeContext()

    return (
        <ButtonC className='d-flex align-c jspace-evenly border-r transition' secend={secend} theme={theme}>
            {children}
        </ButtonC>
    )
}

export default LinkButton

const ButtonC = styled.button`
    
    color: ${({ theme,secend }) => secend ? theme.tertiaryColor :'#fff' };
    cursor: pointer;
    min-width: 128px;
    background-color: ${({ theme,secend }) => secend ? 'inherit':theme.primaryColor  };
    padding: 0.5rem 0.75rem;
    font-size: var(--text-font);
    gap: 0.25rem;
    @media screen  and (max-width: 960px) {
        & {
        font-size: var(--small-font);
        }
    }
`