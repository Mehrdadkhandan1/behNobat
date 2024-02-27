import React from 'react'
import { GeneratePaletteFormC } from './StyleGeneratePaletteForm'
import { useThemeContext } from '../../../hooks/useContexts'
import SubmitFormBtn from '../SubmitFormBtn/SubmitFormBtn'

const GeneratePaletteForm = () => {
    const theme = useThemeContext()
    return (
        <GeneratePaletteFormC theme={theme}>
            <h3> رنگ ها : </h3>
            <form >
                <div className='inputs-palette d-flex align-c '>
                    <p>پالت رنگی وبسایت :</p>
                    <div className="palette d-flex align-c">
                        <div className="colors">
                            <label htmlFor="primaryColor">رنگ اول : </label>
                            <input value={theme.primaryColor} type="color" id='primaryColor' />
                        </div>
                        <div className="colors">
                            <label htmlFor="secondaryColor">رنگ  دوم : </label>
                            <input value={theme.secondaryColor} type="color" id='secondaryColor' />
                        </div>
                        <div className="colors">
                            <label htmlFor="tertiaryColor">رنگ  سوم : </label>
                            <input value={theme.tertiaryColor} type="color" id='tertiaryColor' />
                        </div>
                    </div>
                </div>
                <SubmitFormBtn />

            </form>
        </GeneratePaletteFormC>
    )
}

export default GeneratePaletteForm
