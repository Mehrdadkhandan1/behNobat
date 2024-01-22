import React from 'react'
import { FooterC } from './StyleFooter'
import { SlLocationPin } from "react-icons/sl";
import { useThemeContext } from '../../hooks/useContexts';
import { FiPhoneCall } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import media from './../../media/media.svg'
import googlemap from './../../media/google-maps-marker.png'
const Footer = () => {
    const theme = useThemeContext()
    return (
        <FooterC theme={theme}>
            <div className='footer-data'>
                <div className="contact-us sction-footer">
                    <h4><FiPhoneCall />تماس با ما  </h4>
                    <div className="contact-us-number item-section-footer">
                        <p>شماره تماس : <span>09936757472</span></p>
                        <p>شماره تماس : <span>09936757472</span></p>
                        <p>شماره تماس : <span>09936757472</span></p>
                    </div>
                </div>


                <div className="social-media sction-footer">
                    <h4><img src={media} alt="" />شبکه های اجتماعی </h4>
                    <div className="contact-us-number item-section-footer">
                        <p>  mehrdadkhandan@ <PiTelegramLogoLight /> </p>
                        <p>  mehrdadkhandan@<FaInstagram /> </p>
                    </div>
                </div>


                <div className="location sction-footer">
                    <h4><SlLocationPin /> ادرس کلینیک </h4>
                    <div className=" item-section-footer">
                        <p>یزد ،مید ، خیابان امام، جنب بیمارستان جعفر صادق</p>
                    </div>
                    <img src={googlemap} alt="" />
                </div>


            </div>
            <div className="programmers">
                <h3>طراحی و برنامه نویسی شده توسط گروه Archers Coder </h3>
                <p className="email">Email : 1mehrdadkhandan@gmai.com</p>
                <p className="phoneNumber"> Call : 09936757472</p>
            </div>
        </FooterC>
    )
}

export default Footer
