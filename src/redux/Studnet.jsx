import React from 'react'
import { useSelector } from 'react-redux'
import store from '../store'

const Studnet = () => {
    const data = useSelector(store=>store.student)
  return (
    <>
    <h1>The name of the student is {data.name}</h1>
    </>
  )
}

export default Studnet