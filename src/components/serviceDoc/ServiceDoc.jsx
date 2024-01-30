import React from 'react'
import { ServiceDocC } from './StyleServiceDoc'

import mind from './../../media/mind.jpg'
import { useThemeContext } from '../../hooks/useContexts'

const ServiceDoc = () => {
    const theme = useThemeContext()
    return (
        <ServiceDocC theme={theme} className='d-flex jspace-between align-c box-shadow border-r'>
            <div className="info-and-img d-flex align-c">
                <div className="img-section">
                    <img src={mind} alt="" />
                </div>

                <div className="info-section d-flex jspace-between">
                    <p className='name-service d-flex'>
                        <span>
                            سرویس
                        </span>
                        :
                        <span>
                            تست مغز
                        </span>

                    </p>

                    <p className='time-service d-flex'>
                        <span>
                            زمان
                        </span>
                        :
                        <span>
                            25 دقیقه
                        </span>
                    </p>
                </div>
            </div>
            <p className="price d-flex">
                <span>قیمت </span>
                :
                <span>
                    29,599,222
                </span>
                <span>
                    ریال
                </span>
            </p>
        </ServiceDocC>
    )
}

export default ServiceDoc
