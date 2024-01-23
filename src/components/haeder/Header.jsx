import React  from 'react'
// style component
import { HeaderC } from './StyleHeader'
// theme
// logo website
import logo from './../../media/doctoreto-logo.webp'

import { RiMenu2Line } from "react-icons/ri";

import Button from '../button/Button'
import { useBusinessContext, useThemeContext } from '../../hooks/useContexts';
const Header = () => {
    // use Theme
    const theme =useThemeContext()
    const business =useBusinessContext()

    return (
        <HeaderC theme={theme}>
            <div className='logo'>
                <img src={business.logo} alt="logo" />
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
