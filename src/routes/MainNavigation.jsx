import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productos from '../views/Productos'
import Carrito from '../views/Carrito'
import ProductosProvider from '../context/ProductosProvider'
import Navbar from '../components/Navbar/Navbar'

const MainNavigation = () => {
    return (
        <BrowserRouter>
            <ProductosProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Productos />} />
                    <Route path='/carrito' element={<Carrito />} />
                </Routes>
            </ProductosProvider>
        </BrowserRouter>
    )
}

export default MainNavigation