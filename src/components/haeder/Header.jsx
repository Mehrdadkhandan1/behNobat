import React, { useContext } from 'react'
import { HeaderC } from './Style'
import { ThemeContext } from '../../context/ThemeContex'
import logo from './../../media/doctoreto-logo.webp'
import Button from '../button/Button'
const Header = () => {
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
        </HeaderC>
    )
}

export default Header
