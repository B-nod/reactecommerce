import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const[product,setProduct]=useState({})
    const params = useParams()
    const id= params.productId
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[id])
    //add to cart
    const addToCart=()=>{
      const cartItems = JSON.parse(localStorage.getItem('cartData')) || []
      const productItem = {
        id:product.id,
        title:product.title,
        price:product.price,
        description:product.description,
        image:product.image,
        quantity:1
      }
      //check if item is present in the cart or not
      const existingItem = cartItems.find(item=>item.id===product.id)
      if(existingItem){
        toast.error('product is already exit in the cart')
      }
      else{
        cartItems.push(productItem)
        localStorage.setItem('cartData',JSON.stringify(cartItems))
        toast.success(`${product.title} is added to cart`)
      }
    }
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
      <div className="row d-flex justify-content-between my-4 align-items-center">
        <div className="col-md-3">
          <img className='' src={product.image} alt={product.title} width={300} />
        </div>
        <div className="col-md-6 bg-secondary text-white px-5 py-3 rounded">
          <h1>{product.title}</h1>
          <h2>Rs. {product.price}</h2>
          <p>{product.description}</p>
          <p className='text-info text-uppercase'><strong>Category</strong>: {product.category}</p>
          <div className="my-3">
            <button className="btn btn-warning" onClick={addToCart}>Add to cart</button>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetail