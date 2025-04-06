import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer'


function App() {
  return (
    <div >
      <Navbar />
      <div className='bg-blue-50'>
        <Routes>
          <Route path ="/" element={<Home/>}></Route>

        </Routes>
      </div>
     <Footer/>
    </div>
  )
}

export default App
