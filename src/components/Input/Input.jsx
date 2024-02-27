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
    transition: all ease-in-out 0.4s;
    display: flex; 
    flex-direction: column;
    gap: 0.75rem;
    width:100% ;
    min-width: 200px;
    max-width: 250px;
        label{
            transition: all ease-in-out 0.4s;
            color:${({ theme }) => theme.tertiaryColor} ;
            font-size: var(--text-font);
        }
        input{
            transition: all ease-in-out 0.4s;
            border: 1px solid ${({ theme }) => theme.tertiaryColor};
            border-radius: 0.5rem;
            box-shadow: 0px 0px 6px 1px rgba(81, 81, 81, 0.25);
            outline: 0;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            direction: rtl;
        }
        input::placeholder{
            opacity: 0.5;
            font-size: var(--small-font);
        }
        @media screen and (max-width: 960px) {
            &{
                input{
                    padding: 0.5rem;
                }
            }
        }
        @media screen and (max-width: 500px) {
            & label , & input{
                font-size: var(--small-font);
                input{
                    padding: 0.5rem;
                }
            }
        }
`