import React, { useContext, useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderC } from './StyleSlider';
import Experience from '../experience/Experience';
import { ThemeContext } from '../../context/ThemeContex';

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );
  const [numberSlides, setNumberSlides] = useState(3)

  useEffect(() => {
    changeNumberSlides()
  },[])

  // change number slides for responsive
  const changeNumberSlides = () => {
    if (window.innerWidth <= 768 && window.innerWidth >= 500) {
      console.log('object')
      setNumberSlides(2)
    } else if (window.innerWidth <= 500) {
      setNumberSlides(1)
    }else{
      setNumberSlides(3)
    }
  }
  
  window.addEventListener('resize',changeNumberSlides)
  const theme = useContext(ThemeContext)
  return (
    <SliderC theme = {theme}>
      <h2>تخصص های ما</h2>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={numberSlides}
        centeredSlides={false}
        spaceBetween={40}

        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <Experience />
          </SwiperSlide>
        ))}
      </Swiper>




    </SliderC>
  );
}
