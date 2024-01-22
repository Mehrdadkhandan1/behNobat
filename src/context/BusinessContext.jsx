import React, { createContext } from 'react'




export const BusinessContext = createContext()

const BusinessContextProvider = ({ children,value }) => {
    return (
        <BusinessContext.Provider value={value} >
            {children}
        </BusinessContext.Provider>
    )
}

export default BusinessContextProvider
