import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import TareasContainer from '../components/TareasContainer'
import CreateTarea from '../components/CreateTarea'

const MainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<TareasContainer/>} />
            <Route path='/create' element={<CreateTarea/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes