import React from 'react'
import { Step3RC } from './StyleStep3R'
import Input from '../Input/Input'
import { useThemeContext } from '../../hooks/useContexts'
const signUpInputs = [
    { name: 'fullName', labale: 'نام و نام خانوادگی', type: 'text', example: 'مهرداد خندان' },
    { name: 'nationalCode', labale: ' کد ملی', type: 'number', example: '4482.....' },
    { name: 'phoneNumber', labale: 'شماره موبایل', type: 'number', example: '0930......' },
    { name: 'phoneNumber', labale: "ایمیل  (اختیاری)", type: 'email', example: 'example@example.ir' },
]
const Step3R = () => {
    const theme = useThemeContext()
    return (
        <Step3RC theme={theme}>
            <h4>
                اطلاعات مراجعه کننده :
            </h4>
            <div className='form-user-info'>
                {
                    signUpInputs.map(({ name, labale, type, example }, index) => {
                        return <Input name={name} key={index}  label={labale} type={type} example={example} />

                    })
                }
            </div>
        </Step3RC>
    )
}

export default Step3R
