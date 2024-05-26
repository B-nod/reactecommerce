import React from 'react'

const Card = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-img">
                                <img src="/images/product5.jpg" className="card-img-top" alt="..." />
                            </div>
                           
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/product4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/product1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/product8.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card