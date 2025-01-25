import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Navbar from './components/Navbar'


function App() {
  
  return (
    <div>
      <Navbar/>
     <main className="main-content">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
       </Routes>
     </main>
    </div>
     
  )
}

export default App;
