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
    {products}
    <Card/>
    <Card/>
    <Card/>
    
    
    </>
  )
}

export default Products