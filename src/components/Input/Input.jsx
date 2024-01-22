import React from 'react'
import styled from 'styled-components'
import { useThemeContext } from '../../hooks/useContexts'

const Input = ({ name, label, type, example, value, change }) => {
    const theme = useThemeContext()
    return (
        <InputC theme={theme}>
            <label htmlFor={name}>
                {label}:
            </label>
            <input value={value} onChange={change} name={name} placeholder={example} type={type} />
        </InputC>
    )
}

export default Input

const InputC = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 0.75rem;
    width:280px ;
        label{
            color:${({ theme }) => theme.tertiaryColor} ;
            font-size: var(--text-font);
        }
        input{
            border: 1px solid ${({ theme }) => theme.tertiaryColor};
            border-radius: 0.5rem;
            box-shadow: 0px 0px 6px 1px rgba(81, 81, 81, 0.25);
            outline: 0;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0.75rem 0.5rem;
            direction: rtl;
        }
        input::placeholder{
            opacity: 0.5;
            font-size: var(--small-font);
        }
        @media screen and (max-width: 960px) {
            &{
                width: 230px;
                input{
                    padding: 0.5rem;
                }
            }
        }
`