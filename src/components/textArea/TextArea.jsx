import React from 'react'
import styled from 'styled-components'

const TextArea = ({ label, name, value, change, example }) => {
    return (
        <TextAreaC>
            <label htmlFor={name}> {label}: </label>
            <textarea name={name} id={name} onChange={change} value={value} placeholder={example} ></textarea>
        </TextAreaC>
    )
}

export default TextArea


const TextAreaC = styled.div`
        height: 100%;
        display: grid;
        grid-template-rows: 14% 86%;
    textarea{
        box-shadow: 0px 0px 6px 1px rgba(81, 81, 81, 0.25);
        border-radius: 0.5rem;
        padding: 0.5rem;
        outline: 0;
        width: 100%;
    }    textarea::placeholder{
            opacity: 0.5;
            font-size: var(--small-font);
        }
        @media screen and (max-width: 768px) {
            & {
                gap: 1rem;
            textarea{
                min-height: 150px;
            }
                
            }
        }
`