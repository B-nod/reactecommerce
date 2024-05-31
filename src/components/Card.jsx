import React from 'react'
import { Link } from 'react-router-dom'

const Card = (prop) => {
    const{image,title,price,id}=prop.data
    return (
        <>

            <div className="col">
                <div className="card">
                    <div className="card-img">
                        <img src={image} className="card-img-top" alt={title} />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5>Rs. {price}</h5>
                        <Link className='btn btn-success'>View Details</Link>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card