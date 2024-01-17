import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { routes } from './routes'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Sidebar />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}

        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
