import React from 'react'
import Home from './features/compenents/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/home' element={<Home/>}/>
      </Routes>

    </Router>
  )
}

export default App