import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './views/Home/Home'
import Navbar  from './components/Navbar/Navbar'
import { Error404 } from './components/Error404/Error404'
import { Contact } from './views/Contact/Contact'

function App() {
  const [showNavbar, setShowNavbar] = useState(true)
  const location = useLocation()

  // Ocultar Navbar en una ruta específica
  const hideNavbarRoutes = ['/login', '/register']

  // Verificar si la ruta actual está en la lista de rutas para ocultar Navbar
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)

  // Mostrar u ocultar Navbar según la ruta actual
  const handleNavbarVisibility = () => {
    setShowNavbar(!shouldHideNavbar)
  }

  return (
    <div onClick={handleNavbarVisibility}>
      {showNavbar && <Navbar />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
