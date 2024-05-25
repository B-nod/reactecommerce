import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from './First'
import Second from './Second'

const MyRoute = () => {
  return (
    //defining url or routing 
    <Router>
        <Routes>
            <Route path='/' element={<First/>}/>
            <Route path='/test' element={<Second/>}/>
        </Routes>
    </Router>
  )
}
export default MyRoute
