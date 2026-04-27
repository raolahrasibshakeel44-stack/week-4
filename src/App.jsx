import { useState } from 'react'
import './App.css'
import Test from './Test/Test'
import MainMenu from './MainMenu/MainMenu'
import SideMenu from './SideMenu/SideMenu'
SideMenu
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='partition'>
      <div className='left'> <SideMenu /></div>
      <div className='right'><MainMenu /></div>
    </div>
    
    </>
  )
}

export default App
