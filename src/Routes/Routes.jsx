import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Timer from '../Components/Timer'

const RoutesElement = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/timer",
                element: <Timer/>
            }
        ]
    }
])


export default RoutesElement