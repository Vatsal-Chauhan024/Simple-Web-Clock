import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const navItems = [
        {
            elementValue: "Home",
            elementLink: "/"
        },
        {
            elementValue: "StopWatch",
            elementLink: "/timer"
        }
    ]




  return (
    <>
    <div className='fixed top-0 w-full bg-black/80 min-h-16 flex items-center justify-between px-10 font-bold backdrop-blur-3xl shadow-customShadow border-b border-solid border-[rgba(50, 50, 255, 1)]'>

    <div>
        <h1 className='text-white/95 text-3xl sm:text-4xl leading-snug'>Clock <span className='text-indigo-700'>App</span></h1>
    </div>

    <div className='hidden sm:inline-block'>
        <ul className='flex items-center gap-5'>

        {
            navItems.map((element, key)=> (
                <Link to={element.elementLink} key={key}><li className='text-lg text-white tracking-wide libefore hover:text-white/70'>{element.elementValue}</li></Link>
            ))
        }
        </ul>
    </div>  

    <div className='inline-block sm:hidden'>
        <FaBars className='text-white text-lg' onClick={()=> setIsOpen(!isOpen)}/>


        <ul className={`flex flex-col justify-center gap-2 absolute top-16 transition-all duration-500 w-full bg-white ${isOpen ? "left-0" : "left-full"}`}>

        {
            navItems.map((element, key)=> (
                <Link to={element.elementLink} key={key}><li className='text-lg text-indigo-500 tracking-wide  hover:text-indigo-700 px-10 py-2'>{element.elementValue}</li></Link>
            ))
        }
        </ul>
    </div>      
    </div>
    </>
  )
}

export default Navbar
