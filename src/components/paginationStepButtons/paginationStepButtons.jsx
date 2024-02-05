import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LinkButton from '../LinkButton/Button'
import { GrFormPrevious } from "react-icons/gr";

const PaginationStepButtons = () => {
    return (
        <PaginationStepButtonsC >
            <LinkButton>
                مرحله بعد <GrFormPrevious/>
            </LinkButton>
            <LinkButton secend={true}>
                مرحله قبل 
            </LinkButton>
        </PaginationStepButtonsC>
    )
}

export default PaginationStepButtons

const PaginationStepButtonsC = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1rem;
    flex-direction: row-reverse;
`