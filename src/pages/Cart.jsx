import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const[products,setProduct]=useState([])
    useEffect(()=>{
        const cartDate=JSON.parse(localStorage.getItem('cartData'))
        setProduct(cartDate)
    })
  return (
    <>
    <ToastContainer theme='colorred' position='top-center'/>
    <div className="container">
        <div className="row d-flex-justify-content-between my-5">
            {products.lenght===0 ?
            <h2 className="mt-4 text-center text-danger">
                Your cart is empty
            </h2>
            :(
                <>
                <h2 className="text-center">
                    Your cart Items
                </h2>
                <div className="col-md-8 shadow"></div>
                <div className="col-md-3">
                    <div className="shodow p-2">
                        <h5>Cart Summary</h5>
                        <p><strong>Units: </strong>5</p>
                        <p><strong>Total:</strong>$100</p>
                        <hr />
                        <button className="btn btn-warning">Check out</button>
                    </div>
                </div>
                </>
            )
        }
        </div>
    </div>
    </>
  )
}

export default Cart