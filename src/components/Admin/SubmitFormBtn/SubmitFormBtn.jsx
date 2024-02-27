import React from 'react'
import styled from 'styled-components'
import { FiSave } from "react-icons/fi";
import { useThemeContext } from '../../../hooks/useContexts';

const SubmitFormBtn = () => {
    const theme = useThemeContext()
    return (
        <SubmitFormBtnC theme={theme}>
            <button>
                <FiSave />
                ذخیره اطلاعات
            </button>
        </SubmitFormBtnC>
    )
}


const SubmitFormBtnC = styled.div`
    margin-top: 2rem;
    button{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 1rem;
        background-color: ${({theme})=>theme.primaryColor};
        color: #fff;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
    }
`


export default SubmitFormBtn
