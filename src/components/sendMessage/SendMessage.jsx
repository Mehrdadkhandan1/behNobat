import React, { useState } from 'react'
import { SendMessageC } from './StyleSendMessage'
import Input from '../Input/Input'
import { useThemeContext } from '../../hooks/useContexts'
import TextArea from '../textArea/TextArea'
import Button from '../button/Button'
const formInputs = [
  { name: 'fullName', type: 'text', example: 'مهرداد خندان', label: 'نام و نام خانوادگی' },
  { name: 'phoneNumber', type: 'number', example: '....0930', label: 'شماره تماس' },
  { name: 'nationalCode', type: 'number', example: '....4480', label: 'کد ملی' },
]
const SendMessage = () => {
  const [dataMessage, setDataMessage] = useState({
    phoneNumber: '',
    nationalCode: '',
    fullName: '',
    message: '',
  })
  // theme
  const theme = useThemeContext()

  const changeValueMessage = (e) => {
    const name = e.target.name
    setDataMessage(prevState => {
      return {
        ...prevState,
        [name]:e.target.value
      }
    })
  }

  return (
    <SendMessageC theme={theme}>
      <h2>
        ارسال پیام
      </h2>
      <form className='send-message'>
        <div className="inputs-message">
          {formInputs.map((input,index) => {
            return <Input value={dataMessage[input.name]}
              name={input.name}
              key={index}
              type={input.type}
              example={input.example}
              label={input.label}
              change={changeValueMessage} />
          })}
        </div>
        <div className="write-message">
          <TextArea value={dataMessage.message} change={changeValueMessage} label='پیغام شما' name='message' example='پیغام خود را وارد کنید...' />
          <div>
            <Button>
              ارسال پیام
            </Button>
          </div>
        </div>
      </form>
    </SendMessageC >
  )
}

export default SendMessage
