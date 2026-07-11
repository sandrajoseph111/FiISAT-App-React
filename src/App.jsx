import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addstudent from './components/Addstudent'
import SearchStud from './components/SearchStud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addstudent />
      <SearchStud />
    </>
  )
}

export default App
