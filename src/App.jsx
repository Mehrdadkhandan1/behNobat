import React, { createContext, useContext } from 'react'
import Header from './components/haeder/Header'
import { ThemeContextProvider } from './context/ThemeContex'
import './App.css'
import Index from './Pages/Index'
const App = () => {
  return (
    // context theme
    <ThemeContextProvider>
      <div className='behNobat'>
        <Header />
        <Index />
      </div>
    </ThemeContextProvider>
  )
}

export default App
