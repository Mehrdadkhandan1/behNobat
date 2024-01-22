import React from 'react'
import { SigninC } from './StyleSignin'
import { IoChevronBack } from "react-icons/io5";
import { useThemeContext } from '../../hooks/useContexts';

const Signin = () => {
    const theme = useThemeContext()
    return (
        <SigninC theme={theme}>
            <div className='signin-page'>
                <nav className='go-back'>
                    <IoChevronBack />
                    <span>
                        صفحه اصلی
                    </span>
                </nav>
                <div className="show-pages-signin">
                    <div className="change-page">
                        <p >ورود</p>
                        <p className='active'>ثبت نام</p>
                    </div>
                </div>
            </div>
        </SigninC>
    )
}

export default Signin
