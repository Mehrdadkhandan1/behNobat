import React from 'react'
import { ExpertC } from './StyleExpert'
import { useThemeContext } from '../../hooks/useContexts'
import star from "../../media/start.svg"
import doc2 from "../../media/doc2.jpg"
import Button from '../button/Button'
import LinkButton from '../LinkButton/Button'

const Expert = () => {
    const theme = useThemeContext()
    return (
        <ExpertC theme={theme}>
            <div className="picture-expert">
                <img src={doc2} alt="" />
            </div>
            <div className="informition">
                <p className='info-expert'>
                    <span className='key-expert'>
                        نام :
                    </span>
                    <span className='value-expert'>مهرداد خندان</span>
                </p>
                <p className='info-expert'>
                    <span className='key-expert'>
                        تخصص :
                    </span>
                    <span className='value-expert'> دندان پزشک </span>
                </p>
                <p className='info-expert'>
                    <span className='key-expert'>
                        ساعت کاری :
                    </span>
                    <span className='value-expert'> 8 تا 6 </span>
                </p>
                <p className='info-expert star'>
                    <span className='key-expert'>
                        امتیاز :
                    </span>
                    <span className='value-expert'>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </span>
                </p>
            </div>
            <LinkButton>
                رزرو نوبت
            </LinkButton>
            <div className='more-data'>
                <LinkButton>
                اطلاعات بیشتر ...
                </LinkButton>
            </div>

        </ExpertC>
    )
}

export default Expert
