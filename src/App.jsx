import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './LandingPage.jsx'
import { Button } from "@/components/ui/Button"
import { buttonVariants } from "@/components/ui/Button"

import ButtonsPage from '@/pages/buttons'
import * as React from "react"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//useState() actualiza todoalv (default)
//useEffect() 
//useContext() para no hacer props a lo pendejo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/buttons" element={<ButtonsPage></ButtonsPage>}></Route>
        
      </Routes>
    </Router>
  )
}

export default App
