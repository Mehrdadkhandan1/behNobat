import React from 'react'
import { ExpertisePageC } from './StyleExpertisePage'
import SearchBox from '../../components/SearchBox/SearchBox'
import star from './../../media/start.svg'
import { useThemeContext } from '../../hooks/useContexts'
import Expertise from '../../components/experience/Experience'
const ExpertisePage = () => {
    const theme = useThemeContext()
    return (
        <ExpertisePageC theme={theme}>
            <nav className="header-expertise-page">
                <h3 className='select-expertise'>
                    <img src={star} alt="star" />
                    <span>بخش مورد نظر را انتخاب کنید</span>
                </h3>
                <SearchBox />
            </nav>
            <section className='expertises'>
                <Expertise />
                <Expertise />
                <Expertise />
                <Expertise />
                <Expertise />
            </section>
        </ExpertisePageC>
    )
}

export default ExpertisePage
