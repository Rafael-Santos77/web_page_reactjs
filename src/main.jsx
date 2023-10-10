import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './App.jsx'
import Wiki from './wiki.jsx'

const router= createBrowserRouter([{ 
    path:"/",
    element: <Home />},

    { path:'wiki',
    element: <Wiki />},

  

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);


