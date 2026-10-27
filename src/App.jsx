import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import DocumentTitleCounter from './components/useeffect-practice/DocumentTitleCounter'
import LiveClock from './components/useeffect-practice/LiveClock'
import WindowWidthTracker from './components/useeffect-practice/WindowWidthTracker'


function App() {
 

  return (
    <>
   

    <h2>Task 2: useEffect</h2>
    <DocumentTitleCounter />
    <LiveClock/>
    <WindowWidthTracker/>
     
    </>
  )
}

export default App
