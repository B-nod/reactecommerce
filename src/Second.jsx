import React from 'react'

const Second = () => {
  return (
    // why we need fragment to grouping multiple element as well to return multiple elements 
    <>
    <h2 style={{color:'white',backgroundColor:'darkcyan', fontSize:'55px'}}>This is a second component</h2>
    <h2>This is a test</h2>

    </>
  )
}

export default Second