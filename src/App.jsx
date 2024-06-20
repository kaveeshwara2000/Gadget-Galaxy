import { useState } from 'react'
import { Home } from './pages/Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Cart} from './pages/Cart'
import {Favorites} from './pages/Favorites.jsx'
import {Order} from './pages/Order'
import Sidebar from './components/Sidebar'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favs' element={<Favorites/>}/>
        <Route path='/orders' element={<Order/>}/>
      </Route>
    )
  )

  return (
   <div className='App'>
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
const Root = ()=>{
  return(
    <>
    <div>
      <Sidebar/>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
    
  )
}
