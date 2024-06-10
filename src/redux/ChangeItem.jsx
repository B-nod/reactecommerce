import React from 'react'
import { useDispatch } from 'react-redux'

const ChangeItem = () => {
    const dispatch=useDispatch()

    const add=()=>(
        dispatch({type:'ADD_TO_CART'}) 
    )
  return (
    <>
    <div className="my-2">
        <div className="row d-flex justify-content-around">
            <div className="col-4">
                <div className="btn btn-primary" onClick={add}>Add</div>
            </div>
            <div className="col-4">
                <div className="btn btn-danger">Remove</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ChangeItem