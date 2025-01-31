import Login from '@/pages/Login'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/user/login-in" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes