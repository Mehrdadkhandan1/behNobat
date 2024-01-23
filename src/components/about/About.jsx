import React from 'react'
import { AboutC } from './StyleAbout'
import img from './../../media/clinic.jpg'
import LinkButton from '../LinkButton/Button'
import { IoCall } from "react-icons/io5";
import { useBusinessContext, useThemeContext } from '../../hooks/useContexts';
const About = ({ showMore }) => {
    const theme = useThemeContext()
    const { about } = useBusinessContext()
  
    return (
        <AboutC theme={theme}>
            <h2>
                درباره ما
            </h2>

            <div className="about">
                <div className='text-about'>
                    <p>{about.text}</p>
                    <div className="links-about">
                        <LinkButton>
                            تماس با ما <span><IoCall /></span>
                        </LinkButton>
                        <LinkButton secend>
                            اطلاعات بیشتر
                        </LinkButton>
                    </div>
                </div>
                <div className='picture-about'>
                    <img src={about.image} alt="clinic" />
                </div>
            </div>
        </AboutC>
    )
}

export default About
