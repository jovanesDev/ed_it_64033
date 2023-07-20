import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import TareasContainer from '../components/TareasContainer'
import CreateTarea from '../components/CreateTarea'
import WithAxiosFunctions from '../hoc/WithAxiosFunctions'


const MainRoutes = () => {
  const TareasContainerHoc = WithAxiosFunctions(TareasContainer)
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<TareasContainerHoc/>} />
            <Route path='/create' element={<CreateTarea/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes