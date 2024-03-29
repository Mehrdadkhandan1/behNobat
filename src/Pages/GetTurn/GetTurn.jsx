import React from 'react'
import { GetTurnC } from './StyleGetTurn'
import doc from './../../media/doc2.jpg'
import star from './../../media/start.svg'
import { useThemeContext } from '../../hooks/useContexts'
import Step1R from '../../components/step1R/Step1R'
import PaginationStepButtons from '../../components/paginationStepButtons/paginationStepButtons'
import Step3R from '../../components/Step3R/Step3R'
import Step4R from '../../components/Step4R/Step4R'
import MobileNavR from '../../components/mobileNavR/MobileNavR'
import Step2R from '../../components/step2R/Step2R'
const GetTurn = () => {
    const theme = useThemeContext()
    return (
        <GetTurnC theme={theme}>
            <div className="informition-doc transition   d-flex jspace-between">
                {/* photo , name and more... */}
                <div className="info-doc-section transition d-flex">
                    <div className="img-section transition">
                        <img className='box-shadow' src={doc} alt="دکتر" />
                    </div>
                    <div className="info-doc transition d-flex jspace-evenly">
                        <h4>
                            <span>نوبت گیری از</span>
                            :
                            <span>دکتر محمدی</span>
                        </h4>

                        <p className='d-flex'>
                            <span>تخصص </span>
                            :
                            <span>قلب و عروق</span>
                        </p>

                        <p className='d-flex'>
                            <span>ساعت کاری  </span>
                            :
                            <span>6 تا 8</span>
                        </p>

                    </div>
                </div>


                {/* score doctor */}
                <div className="score-doc-section transition">
                    <div className='scocre-doc transition d-flex align-c'>
                        <span>
                            امتیاز
                        </span>
                        :

                        <span className='number-people'>
                            (24 نفر)
                        </span>

                        <span className='score'>
                            4.9
                        </span>

                        <div className='star-image'>
                            <img src={star} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="reservation">
                <h3>
                    نوبت گیری از متخصص
                </h3>

                <div className="reservation-section box-shadow border-r d-grid">
                    <nav className="nav-reservition">
                        <h4>
                            مراحل نوبت گیری :
                        </h4>
                        <div className="stages">
                            <ul className='d-flex'>
                                <li>
                                    <a href="#">
                                        انتخاب سرویس :
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        انتخاب تاریخ و ساعت :
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        اطلاعات مراجعه کننده  :
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        تایید کردن اطلاعات :
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        نوبت شما ثبت شد
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <MobileNavR />
                    <div className='show-outlet d-flex jspace-between'>
                        {/* <Step1R /> */}
                        <Step2R />
                        {/* <Step3R /> */}
                        {/* <Step4R /> */}
                        <PaginationStepButtons />
                    </div>
                </div>

            </div>
        </GetTurnC>
    )
}

export default GetTurn
