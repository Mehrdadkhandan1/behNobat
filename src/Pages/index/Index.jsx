import React from 'react'
// styled component 
import { MainC } from './Style'
// logo
import doc from './../../media/doc.png'

import Button from '../../components/button/Button'
import { LuCalendarClock } from "react-icons/lu";
import Slider from '../../components/Slider/Slider'
import About from '../../components/about/About'
import { useBusinessContext, useThemeContext } from '../../hooks/useContexts'
import SendMessage from '../../components/sendMessage/SendMessage';
const Index = () => {
  // use Colors
  const theme = useThemeContext()
  const business = useBusinessContext()
  console.log(business)
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
      <Slider />
      <About />
      <SendMessage />

    </MainC>
  )
}

export default Index
