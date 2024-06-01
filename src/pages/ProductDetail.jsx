import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const[product,setProduct]=useState({})
    const params = useParams()
    const id= params.productId
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])
  return (
    <>
    
    </>
  )
}

export default ProductDetail