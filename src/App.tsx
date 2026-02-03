import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home/home'
import { MainLayout } from './layouts/MainLayout'
import { Posters } from './pages/posters/posters'
import { About } from './pages/about/About'
import { Login } from './pages/login/Login' 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posters' element={<Posters />} />
            <Route path='/contact' element={<div>Contact</div>} />
            <Route path='/login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App