import React from 'react'
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
  return (
    <SignUpC>
        <form>
                {signUpInputs.map(
                    ({ name, labale, type, example }) => {
                        return <Input name={name} label={labale} type={type} example={example} />
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
