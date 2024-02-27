import React, { createContext, useContext, useEffect, useState } from 'react'
import Header from './components/haeder/Header'
import { ThemeContextProvider } from './context/ThemeContex'
import './App.css'
import Index from './Pages/index/Index'
import api from './services/config'
import BusinessContextProvider from './context/BusinessContext'
import Signin from './Pages/Signin/Signin'
import ExpertisePage from './Pages/ExpertisePage/ExpertisePage'
import Footer from './components/footer/Footer'
import ExpertsPage from './Pages/ExpertsPage/ExpertsPage'
import GetTurn from './Pages/GetTurn/GetTurn'
import AdminPanel from './Pages/AdminPanel/AdminPanel'
const App = () => {
  // theme Web
  const [theme, setTheme] = useState({})
  const [defualtValue, setDefualtValue] = useState({})

  useEffect(() => {
    // send requst 
    const fetchData = async () => {
      // defualt Data 
      const result = (await api.get('/business')).data
      setDefualtValue(result.data)
      // Set theme 
      setTheme(result.data.colorPalette)
    }
    fetchData()
  }, [])

  return (
    Object.keys(defualtValue).length &&
    <BusinessContextProvider value={defualtValue}>
      {/* context theme */}
      <ThemeContextProvider theme={theme}>
        <div className='behNobat'>
          {/* <Header /> */}
          {/* <Index /> */}
          {/* <Signin / > */}
          {/* <ExpertisePage /> */}
          {/* <ExpertsPage /> */}
          {/* <GetTurn/> */}
          {/* <Footer /> */}
          <AdminPanel />
        </div>
      </ThemeContextProvider>
    </BusinessContextProvider>
  )
}

export default App
