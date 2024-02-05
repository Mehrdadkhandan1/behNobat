
import React from 'react'
import { Step4RC } from './StyleStep4R'
import { useThemeContext } from '../../hooks/useContexts'

const Step4R = () => {
    const theme = useThemeContext()
    return (
        <Step4RC theme={theme}>

            <h4>
                تایید کردن اطلاعات :
            </h4>

            <div className="user-info">
                <h5>
                    اطلاعات مراجعه کننده :
                </h5>
                <div className='informition d-grid'>
                    {/* name user */}
                    <p>
                        <span> نام و نام خانوادگی   </span>
                        :
                        <span>مهرداد خندان</span>
                    </p>
                    <p>
                        <span>کد ملی </span>
                        :
                        <span>
                            4480165584
                        </span>
                    </p>
                    <p>
                        <span>شماره تماس </span>
                        :
                        <span>
                            09936757472
                        </span>
                    </p>
                </div>
            </div>
            {/* service information */}
            <div className='service-information'>
                <h5>
                    اطلاعات سرویس :
                </h5>
                <p className="name-doc">
                    <span>نام متخصص </span>
                    :
                    <span>
                        دکتر میر محمدی
                    </span>
                </p>
                <div className="information-s d-grid">
                    <p>
                        <span>نام سرویس </span>
                        :
                        <span>سرویس مغز </span>
                    </p>

                    <p>
                        <span>زمان ویزیت </span>
                        :
                        <span>
                            25 دقیقه
                        </span>
                    </p>

                    <p>
                        <span> روز مراجعه  </span>
                        :
                        <span>26 بهمن</span>
                    </p>

                    <p>
                        <span> ساعت مراجعه </span>
                        <span> 22:20  </span>
                    </p>
                </div>
                <p className='price-service'>
                    <span>
                        مبلغ پرداخت 
                    </span>
                    : 
                    <span>
                        29,400,600
                    </span>
                </p>
            </div>
        </Step4RC>
    )
}

export default Step4R
