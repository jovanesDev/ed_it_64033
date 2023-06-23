import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {routes} from './routes'
import Navbar from '../components/Navbar/Navbar'
import Ropa from '../views/Ropa/Ropa'
import RopaHombre from '../views/Ropa/RopaHombre'
import RopaMujer from '../views/Ropa/RopaMujer'
import RopaCombinada from '../views/Ropa/RopaCombinada'

const MainNavigation = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <>
            {routes.map(({path,Element},index) => (
                <Route key={index} path={path} element={<Element to={path === '*' ? '/' : null}/>} />
            ))}
            <Route path='/ropa' element={<Ropa/>}>
                    <Route index element={<RopaCombinada/>}/>
                    <Route path='hombre' element={<RopaHombre/>}/>
                    <Route path='mujer' element={<RopaMujer/>}/>
            </Route>
            </>

        </Routes>

    </BrowserRouter>
  )
}

export default MainNavigation