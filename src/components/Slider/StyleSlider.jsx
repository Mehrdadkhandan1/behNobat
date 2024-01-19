import styled from "styled-components";

export const SliderC = styled.section`
    margin-top: 4rem;
    width: 100%;
    .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .swiper {
    width: 100%;
    height: 350px;
    margin: 20px auto;
  }
`