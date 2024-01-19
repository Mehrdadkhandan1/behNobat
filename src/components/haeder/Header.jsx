import React, { useContext } from 'react'
// style component
import { HeaderC } from './StyleHeader'
// theme
import { ThemeContext } from '../../context/ThemeContex'
// logo website
import logo from './../../media/doctoreto-logo.webp'

import { RiMenu2Line } from "react-icons/ri";

import Button from '../button/Button'
const Header = () => {
    // use Theme
    const theme = useContext(ThemeContext)
    return (
        <HeaderC theme={theme}>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='signup'>
                <Button>
                    ثبت نام
                </Button>
                <button className='login'>
                    ورود
                </button>
            </div>
            <div className="menu">
            <RiMenu2Line />
            </div>
        </HeaderC>
    )
}

export default Header
