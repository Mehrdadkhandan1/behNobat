import React from 'react'
import { SettingC } from './StyleStting'
import { IoSettingsOutline } from "react-icons/io5";
import { useThemeContext } from '../../../../hooks/useContexts';
import Input from '../../../Input/Input';
import TextArea from '../../../textArea/TextArea';
import logo from '../../../../media/doctoreto-logo.webp'
import { IoCloudUploadOutline } from "react-icons/io5";
import SubmitFormBtn from '../../SubmitFormBtn/SubmitFormBtn';
import GeneratePaletteForm from '../../GeneratePaletteFrom/GeneratePaletteForm';

const formClinicdata = [
    { name: 'name-clinic', type: 'text', label: 'نام کلینیک ', example: 'کلینیک محمدی', },
    { name: 'expertise', type: 'text', label: 'تخصص شما', example: 'مغز و اعصاب', },
    { name: 'email', type: 'email', label: 'ایمیل شما ', example: 'example@exa,ks', },
]
const Setting = () => {
    const theme = useThemeContext()
    return (
        <SettingC theme={theme}>
            <h2>
                <span className='icon-title'>
                    <IoSettingsOutline />
                </span>
                <span>تنظیمات وبسایت</span>
            </h2>


            <div className="information-clinic">
                <h3>
                    اطلاعات کلینیک شما :
                </h3>
                <form >
                    <div className='inputs-form'>
                        {formClinicdata.map(({ name, type, example, label }, index) => {
                            return (<Input label={label} type={type} example={example} name={name} key={index} />)
                        })}
                    </div>
                    <div className="slogan">
                        <TextArea label='شعار کلینیک' name='slogan' example='یکی برا همه ' />
                    </div>
                    <div className="change-logo">

                        <p>لوگو شما : </p>


                        <div className='input-change'>

                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>

                            <div className="input">

                                <label htmlFor="change-logo">
                                    <IoCloudUploadOutline />
                                    بارگذاری لوگو جدید
                                </label>

                                <input type="file" id='change-logo' />

                            </div>

                            <p className="info">حد اکثر 200کیلو بایت</p>

                        </div>
                    </div>
                    <SubmitFormBtn />
                </form>
            </div>
            <GeneratePaletteForm />

        </SettingC>
    )
}

export default Setting
