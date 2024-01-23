import React from 'react'
import { SigninC } from './StyleSignin'
import { IoChevronBack } from "react-icons/io5";
import { useThemeContext } from '../../hooks/useContexts';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

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
                        <p className='active' >ورود</p>
                        <p >ثبت نام</p>
                    </div>
                    <div className="outlet">
                    {/* <Login />  */}
                    <SignUp />
                    </div>
                </div>
            </div>
        </SigninC>
    )
}

export default Signin
