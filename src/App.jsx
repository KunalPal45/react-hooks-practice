import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CounterApp from './components/hook -practice/CounterApp'
import ToggleVisibility from './components/hook -practice/ToggleVisibility'
import BackgroundColorChanger from './components/hook -practice/BackgroundColorChanger'
import SimpleForm from './components/hook -practice/SimpleForm'

function App() {
 

  return (
    <>
     <CounterApp/>
     <ToggleVisibility/>
     <BackgroundColorChanger/> 
     <SimpleForm/>
    </>
  )
}

export default App
