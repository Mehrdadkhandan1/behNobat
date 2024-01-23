import React, { useState } from 'react'
import { LoginC } from './StyleLogin'
import Input from '../../components/Input/Input'
import Button from '../../components/button/Button'
const loginInputs = [
    { name: 'phoneNuOrNationalCode', labale: 'کد ملی / شماره موبایل', type: 'number', example: 'شماره موبایل یا کد ملی را وارد کنید ...' },
    { name: 'password', labale: 'رمز عبور', type: 'password', example: '*********' }
]
const Login = () => {
    const [formData, setFormData] = useState(() => {
        const data = {}
        loginInputs.map(item => {
            data[item.name] = ''            
        })
        return data
    })
    const changeValueLogin = (e) => {
        const name = e.target.name
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: e.target.value
            }
        })
    }

    return (
        <LoginC>
            {console.log(formData)}
            <form>
                {loginInputs.map(
                    ({ name, labale, type, example }) => {
                        return <Input name={name} value={formData[name]} change={changeValueLogin} label={labale} type={type} example={example} />
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
