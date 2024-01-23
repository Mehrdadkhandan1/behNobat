import React, { useState } from 'react'
import { SignUpC } from './StyleSignUp'
import Input from '../../components/Input/Input'
import Button from '../../components/button/Button'
const signUpInputs = [
    { name: 'fullName', labale: 'نام و نام خانوادگی', type: 'text', example: 'مهرداد خندان' },
    { name: 'password', labale: 'رمز عبور', type: 'password', example: '*********' },
    { name: 'nationalCode', labale: ' کد ملی', type: 'number', example: '4482.....' },
    { name: 'phoneNumber', labale: 'شماره موبایل', type: 'number', example: '0930......' },
]
const SignUp = () => {
    const [formData, setFormData] = useState(() => {
        const data = {}
        signUpInputs.map(item => {
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
        <SignUpC>
            {console.log(formData)}
            <form>
                {signUpInputs.map(
                    ({ name, labale, type, example },index) => {
                        return <Input name={name} key={index} value={formData[name]} change={changeValueLogin} label={labale} type={type} example={example} />

                    }

                )}
                <div className="submit-signup">
                    <Button>
                        ورود
                    </Button>
                </div>
            </form>
        </SignUpC>
    )
}

export default SignUp
