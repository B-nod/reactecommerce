import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'
import Products from './pages/Products'
// import First from './First'
// import Second from './Second'

const MyRoute = () => {
  return (
    //defining url or routing 
    <Router>
        <Routes>
            {/* <Route path='/' element={<First/>}/>
            <Route path='/test' element={<Second/>}/> */}

            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path='products' element={<Products/>} />
            </Route>
        </Routes>
    </Router>
  )
}
export default MyRoute
