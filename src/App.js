import React from 'react'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Routes from './config/router'

import { theme } from './config/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes></Routes>
      </ThemeProvider>
    </div>
  )
}

export default App

