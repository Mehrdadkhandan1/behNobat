import React, { useContext } from 'react'
// styled component 
import { MainC } from './index/Style'
// logo
import doc from './../media/doc.png'

import { ThemeContext } from '../context/ThemeContex'

import Button from '../components/button/Button'
import { LuCalendarClock } from "react-icons/lu";
const Index = () => {
  // use Colors
  const theme = useContext(ThemeContext)
  return (
    <MainC theme={theme}>
      {/* haeding */}
      <section className='heading'>
        {/* image heading  */}
        <div className="picture">
          <img src={doc} alt="" />
        </div>

        {/* title and welcome , subtext */}
        <div className='title-Subtext'>
          {/* welcome */}
          <p className='welcome-text'>
            به کلینیک ما خوش آمدید
          </p>
          <h1>
            وب سایت نوبت دهی کلینیک ایکس
          </h1>
          <p className='introduction-text'>
            مرکز تخصصی پوست و مو با افراد مجرب
          </p>
          <div className='reservation'>
            <Button>
              رزرو نوبت <span><LuCalendarClock /></span>
            </Button>
          </div>
        </div>

      </section>
    </MainC>
  )
}

export default Index
