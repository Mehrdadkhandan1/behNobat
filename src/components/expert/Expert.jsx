import React from 'react'
import { ExpertC } from './StyleExpert'
import { useThemeContext } from '../../hooks/useContexts'

const Expert = () => {
    const theme = useThemeContext()
    return (
        <ExpertC theme={theme}>

        </ExpertC>
    )
}

export default Expert
