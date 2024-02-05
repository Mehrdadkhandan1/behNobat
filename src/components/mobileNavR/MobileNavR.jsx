import React from 'react'
import { MobileNavRC } from './StyleMobileNavR'
import { useThemeContext } from '../../hooks/useContexts'

const MobileNavR = () => {
    const theme = useThemeContext()
    return (
        <MobileNavRC theme={theme} className='d-grid '>
            <h4>مراحل نوبت گیری</h4>
            <ul className='d-flex'>
                <li>
                    <a href="#"> انتخاب سرویس </a>
                    <span > 1- </span>
                </li>
                <li>
                    <a  href="s#"> انتخاب تاریخ و زمان :  </a>
                    <span>2- </span>
                </li>
                <li>
                    <a   href="#"> اطلاعات مراجعه کننده  :  </a>
                    <span>3- </span>
                </li>

                <li>
                    <a  href="#"> تایید کردن اطلاعات : </a>
                    <span>4- </span>
                </li>
                <li>
                    <a className='active'  href="#"> نوبت شما ثبت شد ! </a>
                    <span>5- </span>
                </li>
            </ul>
        </MobileNavRC>
    )
}

export default MobileNavR
