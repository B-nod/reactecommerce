import React,{useState, useEffect} from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Products = () => {
  const[products, setProducts]=useState([])
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`) // to render data from database we use method get
    .then(res=>{
      setProducts(res.data)
    })
    .catch(err=>console.log(err))
  }, [])
  return (
    <>
        <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.map((item,i)=>(
                   <Card data={item} key={i}/>
                ))}
                </div>
                </div>
    
    </>
  )
}

export default Products