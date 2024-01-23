import React from 'react'
import { LoginC } from './StyleLogin'
import Input from '../../components/Input/Input'
import Button from '../../components/button/Button'
const loginInputs = [
    { name: 'phoneNuOrNationalCode', labale: 'کد ملی / شماره موبایل', type: 'number', example: 'شماره موبایل یا کد ملی را وارد کنید ...' },
    { name: 'password', labale: 'رمز عبور', type: 'password', example: '*********' }
]
const Login = () => {
    return (
        <LoginC>
            <form>
                {loginInputs.map(
                    ({ name, labale, type, example }) => {
                        return <Input name={name} label={labale} type={type} example={example} />
                    }

                )}
                <div className="submit-login">
                    <Button>
                        ورود
                    </Button>
                    <a href=""> رمز عبور را فراموش کردید؟ </a>
                </div>
            </form>
        </LoginC>
    )
}

export default Login
