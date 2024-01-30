import React from 'react'
import { Step1RC } from './StyleStep1R'
import { useThemeContext } from '../../hooks/useContexts'
import ServiceDoc from '../serviceDoc/ServiceDoc'

const Step1R = () => {
    const theme = useThemeContext()
    return (
        <Step1RC theme={theme}>
            <h4>
                انتخاب سرویس :
            </h4>
            <div className="services">
                <ServiceDoc />
                <ServiceDoc />
                <ServiceDoc />
                <ServiceDoc />
            </div>
        </Step1RC>
    )
}

export default Step1R
