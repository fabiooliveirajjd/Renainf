import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Consulta from './pages/Consulta/Consulta'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/consulta" Component={Consulta} />
      </Routes>
    </BrowserRouter>

  )
}
export default App
