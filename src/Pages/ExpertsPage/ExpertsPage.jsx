import React from 'react'
import { ExpertsC } from './StyleExpertsPage'
import star from './../../media/start.svg'
import SearchBox from '../../components/SearchBox/SearchBox'
import { useThemeContext } from '../../hooks/useContexts'

const ExpertsPage = () => {
    const theme = useThemeContext()
  return (
    <ExpertsC theme={theme}>
         <nav className="header-expertise-page">
                <h3 className='select-expertise'>
                    <img src={star} alt="star" />
                    <span>متخصص مورد نظر را انتخاب کنید</span>
                </h3>
                <SearchBox />
            </nav>
            <div className="show-expert">
                
            </div>

    </ExpertsC>
  )
}

export default ExpertsPage
