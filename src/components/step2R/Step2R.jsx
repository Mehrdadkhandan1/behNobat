import React from 'react'
import { Step2RC } from './StyleStep2R'
import DatePicker, { Calendar } from 'react-multi-date-picker'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

const Step2R = () => {
  const changedDate = (e) => {
    console.log(e)
  }
  return (
    <Step2RC>
      <Calendar
        onChange={changedDate}
        calendar={persian}
        locale={persian_fa}

      />
    </Step2RC>
  )
}

export default Step2R
