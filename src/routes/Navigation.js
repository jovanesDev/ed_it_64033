import React from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'
import GlobalProvider from '../context/GlobalProvider'
import ProductosProvider from '../context/ProductosProvider'
import Home from '../pages/Home'
import Carrito from '../pages/Carrito'
import Productos from './Layout/Productos'

const Navigation = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Productos/>}>
                <Route index element={<Home/>} />
                <Route path='carrito' element={<Carrito/>} />
            </Route>
            <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
    </Router>
  )
}

export default Navigation