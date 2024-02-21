import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

const AppRouter = () => {
  return (
  // Crear las rutas
    <Routes>
      {/* Login y registro */}
      <Route path='/auth/*' element={<AuthRoutes/>}/>

      {/* JournalApp */}
      <Route path='/*' element={<JournalRoutes/>}/>
    </Routes>
  )
}

export default AppRouter
