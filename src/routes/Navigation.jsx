import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import WithNavbar from './layout/WithNavbar'
import { store } from '../app/store'
import { Provider } from 'react-redux'

const Navigation = () => {
  return (
    <Router>
         <Provider store={store}>
            <Routes>
              <Route path='/' element={<WithNavbar />} >
                <Route path='login' element={<Login />} />
                <Route index element={<Dashboard />} />
              </Route>
            </Routes>
         </Provider>
    </Router>
  )
}

export default Navigation