import React from 'react'
import { ExperienceC } from './StyleExperience'
import LinkButton from '../LinkButton/Button'
import { LuUser2 } from "react-icons/lu";
import mind from './../../media/mind.jpg'
import { useThemeContext } from '../../hooks/useContexts';

const Expertise = () => {
    const theme =useThemeContext()

 
    return (
        <ExperienceC theme={theme}>
            <div className='picture-experience'>
                <img src={mind} alt="experience" />
            </div>
            <p className='name-experience'> مغز و اعصاب</p>
            <LinkButton>
                نمایش متخصصین <span> <LuUser2 /> </span>
            </LinkButton>
            <span className='number-experts'> تعداد متخصص : 6 </span>
        </ExperienceC>
    )
}

export default Expertise
