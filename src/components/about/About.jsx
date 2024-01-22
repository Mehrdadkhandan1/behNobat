import React from 'react'
import { AboutC } from './StyleAbout'
import img from './../../media/clinic.jpg'
import LinkButton from '../LinkButton/Button'
import { IoCall } from "react-icons/io5";
import { useThemeContext } from '../../hooks/useContexts';
const About = ({showMore}) => {
    const theme =useThemeContext()

    return (
        <AboutC theme={theme}>
            <h2>
                درباره ما
            </h2>
            <div className="about">
                <div className='text-about'>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                    <div className="links-about">
                        <LinkButton>
                            تماس با ما <span><IoCall /></span>
                        </LinkButton>
                        <LinkButton  secend>
                            اطلاعات بیشتر 
                        </LinkButton>
                    </div>
                </div>
                <div className='picture-about'>
                    <img src={img} alt="clinic" />
                </div>
            </div>
        </AboutC>
    )
}

export default About
