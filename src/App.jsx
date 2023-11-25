import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Caca from './components/caca'

const App = () => {
  return (
    <>
    <div className='bg-red-500' >App</div>

    <li>
        <Link to={'/caca'} >
      <p className='bg-teal-500'>
        caca
      </p>
        </Link>
        <Link to={'/'} >
      <p className='bg-teal-500'>
        login
      </p>
        </Link>
    </li>

    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/caca' element={<Caca/>} />

    </Routes>
    </>
  )
}

export default App
