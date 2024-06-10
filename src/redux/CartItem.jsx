import React from 'react'
import { useSelector } from 'react-redux'
import ChangeItem from './ChangeItem'

const CartItem = () => {
    const data = useSelector(store=>store)
  return (
    <>
    {/* reducer is used to store our state and change that state using function within */}
    <h1 className='text-success tex-center'>
        The total number of items in the cart is {data.cartCount}
    </h1>
    <ChangeItem/>
    </>
  )
}

export default CartItem