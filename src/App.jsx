import React, { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/haeder/Header'
import { ThemeContextProvider } from './context/ThemeContex'
import './App.css'
import Index from './Pages/index/Index'
import api from './services/config'
import BusinessContextProvider from './context/BusinessContext'
const App = () => {
  // theme Web
  const [theme, setTheme] = useState({})
  const [defualtValue, setDefualtValue] = useState({})

  useEffect(() => {
    // send requst 
    const fetchData = async () => {
      // defualt Data 
      const result = (await api.get('/business')).data
      setDefualtValue(result)
      // Set theme 
      setTheme(result.colorPalette)
    }
    fetchData()
  }, [])
   return (
    <BusinessContextProvider value={defualtValue}>
      {/* context theme */}
      <ThemeContextProvider theme={theme}>
        <div className='behNobat'>
          <Header />
          <Index />
        </div>
      </ThemeContextProvider>
    </BusinessContextProvider>
  )
}

export default App
