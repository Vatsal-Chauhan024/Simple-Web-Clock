import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  

  return (
  <>
  <div className='h-screen m-0 p-0'>
    <Navbar/>
    <Outlet/>
  </div>
  </>
  )
}

export default App
