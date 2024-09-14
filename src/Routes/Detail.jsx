import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Detail = () => {
 
  const [detail,setDetail] = useState({})

  const {id} = useParams()
  
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  
  useEffect(()=>{
      axios(url).then((res)=>{
        setDetail(res.data)
      })
  },[])

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div className="detail-container">
        <img src="/images/doctor.jpg" alt=""/>
        <p><strong>Name: </strong>{detail.name} </p>
        <p><strong>Email:</strong> {detail.email} </p>
        <p><strong>Phone:</strong> {detail.phone} </p>
        <p><strong>Website:</strong> {detail.website} </p>
      </div>
    </>
  )
}

export default Detail